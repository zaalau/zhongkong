// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  // 查询user表绑定状态
  const [lock] = await Promise.all([
    db.collection('prizess').where({
      isdrawing: false,
      iflottery: true
    }).get(),
  ])
  // 如果找不到isdrawing为false的数据，则奖池锁定中
  if (lock.data.length === 0) {
    return {
      success: true,
      data: {
        success: false,
        MSG: 'SOMEONE IS DRAWING',
      }
    }
  }
  // 抽奖前先将isdrawing更新为true
  await db.collection('prizess').where({
    isdrawing: false,
    iflottery: true
  })
    .update({
      data: {
        isdrawing: true
      },
    })
  // 进入到抽奖逻辑
  try {
    const { OPENID } = cloud.getWXContext();
    // 根据 openid 查询用户信息
    let [users] = await Promise.all([
      db.collection('user').where({
        openid: OPENID
      }).get(),
    ])
    let user = users.data[0]
    // 如果用户拥有抽奖次数，则开始抽奖逻辑
    if (user.draw === 1) {
      // 黑幕，如果openid为oUQyO67LsTlVoIBSH5SJRXoSA0g8
      if (user.openid === 'oUQyO67LsTlVoIBSH5SJRXoSA0g8') {
        // 直接更新user信息，将奖品赋值
        await db.collection('user').where({
          openid: OPENID
        })
          .update({
            data: {
              gift: '100元京东卡',
              gifttext: '100元京东卡',
              draw: 0,
              drawStatus: 'end',
            },
          })
        // 将更新后的用户整个信息return给前端  
        let [users] = await Promise.all([
          db.collection('user').where({
            openid: OPENID
          }).get(),
        ])
        let user = users.data[0]
        // 黑幕完成后，将奖池锁打开
        await db.collection('prizess').where({
          isdrawing: true,
          iflottery: true
        })
          .update({
            data: {
              isdrawing: false
            },
          })
        return {
          success: true,
          data: {
            MSG: 'heimusuccess',
            user
          }
        }
      } else {
        // 获取数据库奖品信息
        let [prizess] = await Promise.all([
          db.collection('prizess').where({
            iflottery: true,
          }).get()
        ])
        let prizes = prizess.data[0].prizes
        let totalQuantity = 0;
        // 计算总奖品数量
        prizes.forEach(prize => {
          totalQuantity += prize.quantity;
        });
        // 如果奖池空了
        if (totalQuantity === 0) {
          // 直接更新user获奖信息
          await db.collection('user').where({
            openid: OPENID
          })
            .update({
              data: {
                gift: '感恩有你，一路同行',
                gifttext: '很遗憾，你没有抽到奖品哦~',
                draw: 0,
                drawStatus: 'end',
              },
            })
          let [users] = await Promise.all([
            db.collection('user').where({
              openid: OPENID
            }).get(),
          ])
          let user = users.data[0]
          // 奖池空了return前将奖池锁打开
          await db.collection('prizess').where({
            isdrawing: true,
            iflottery: true
          })
            .update({
              data: {
                isdrawing: false
              },
            })
          return {
            success: true,
            data: {
              MSG: '奖池空了',
              user
            }
          }
        } else {
          // 生成一个随机数，范围在0到总奖品数量之间
          const randomIndex = Math.floor(Math.random() * totalQuantity);

          // 根据随机数确定抽中的奖品
          let currentQuantity = 0;

          for (const prize of prizes) {
            currentQuantity += prize.quantity;
            if (randomIndex < currentQuantity) {
              // 抽中了！
              // 更新user获奖信息
              await db.collection('user').where({
                openid: OPENID
              })
                .update({
                  data: {
                    gift: prize.gift,
                    gifttext: prize.gifttext,
                    draw: 0,
                    drawStatus: 'end',
                  },
                })
              //更新奖池集合信息
              prize.quantity -= 1;
              await db.collection('prizess').where({
                iflottery: true
              })
                .update({
                  data: {
                    prizes
                  },
                })
              break;
            }
          }
          let [users] = await Promise.all([
            db.collection('user').where({
              openid: OPENID
            }).get(),
          ])
          let user = users.data[0]
          // 正常抽奖结束后，return前将奖池锁打开
          await db.collection('prizess').where({
            isdrawing: true,
            iflottery: true
          })
            .update({
              data: {
                isdrawing: false
              },
            })
          return {
            success: true,
            data: {
              MSG: '抽奖结束',
              user
            }
          }
        }
      }
    } else {
      let [users] = await Promise.all([
        db.collection('user').where({
          openid: OPENID
        }).get(),
      ])
      let user = users.data[0]
      // 抽过的情况也将奖池锁打开
      await db.collection('prizess').where({
        isdrawing: true,
        iflottery: true
      })
        .update({
          data: {
            isdrawing: false
          },
        })
      return {
        success: true,
        data: {
          MSG: '抽过了',
          user
        }
      }
    }
  } catch (error) {
    // 出现错误也需要将锁打开
    await db.collection('prizess').where({
      isdrawing: true,
      iflottery: true
    })
      .update({
        data: {
          isdrawing: false
        },
      })
    return {
      success: false,
      errMsg: error
    };
  }
}