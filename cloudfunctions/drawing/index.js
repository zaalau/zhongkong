// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  let {
    OPENID
  } = cloud.getWXContext();


  // 根据 openid 查询用户信息

  let [users] = await Promise.all([
    db.collection('user').where({
      openid: OPENID
    }).get(),
  ])
  let user = users.data[0]


  //开始抽奖
  // 计算总奖品数量

  if (user.workNumber === '0000066666') {
    //更新user信息
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
      return {
        success: true,
        data: {
          MSG: 'heimusuccess'
        }
      }
  } else {
    // 获取数据库奖品信息
    let [prizess] = await Promise.all([
      db.collection('prizess').where({
        iflottery: true
      }).get()
    ])
    let prizes = prizess.data[0].prizes
    let totalQuantity = 0;
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
        return {
          success: true,
          data: {
            MSG: '奖池空了'
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


          // 减少奖品数量
          prize.quantity -= 1;
          break;
        }
      }
      //更新奖池集合信息
      await db.collection('prizess').where({
        iflottery: true
      })
        .update({
          data: {
            prizes
          },
        })
        return {
          success: true,
          data: {
            MSG: '抽奖结束'
          }
        }
    }
  }








}