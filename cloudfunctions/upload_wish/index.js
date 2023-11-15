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
  let user;
  try {
    // 根据 openid 查询用户信息

    let [users] = await Promise.all([
      db.collection('user').where({
        openid: OPENID
      }).get(),
    ])


    // 默认取查到的第一个user记录
    let {
      historyWish
    } = users.data[0]
    if (historyWish.length > 3) {
      const fileIDs = [historyWish[0].mywish]
      await cloud.deleteFile({
        fileList: fileIDs,
      })
      historyWish.shift()
      historyWish.push(event)
      await db.collection('user').where({
          openid: OPENID
        })
        .update({
          data: {
            historyWish,
          },
        })
    } else {
      if (historyWish.length === 0) {
        await db.collection('user').where({
            openid: OPENID
          })
          .update({
            data: {
              historyWish: _.push(event),
              draw: _.inc(1)
            },
          })
      } else {
        await db.collection('user').where({
            openid: OPENID
          })
          .update({
            data: {
              historyWish: _.push(event)
            },
          })
      }

    }

    return {
      success: true,
      data: {
        successMSG: 'upload_wish success'
      }
    };
  } catch (error) {
    return {
      success: false,
      errMsg: error
    };
  }


}