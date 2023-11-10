// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    let {
      OPENID
    } = cloud.getWXContext();
    let {
      WORKNUMBER
    } = event;

    // 根据 工号 查询用户信息

    let [users] = await Promise.all([
      db.collection('user').where({
        workNumber: WORKNUMBER
      }).get(),
    ])

    // 查询不到相同的工号
    if (users.data.length === 0) {
      await db.collection('user').where({
          openid: OPENID
        })
        .update({
          data: {
            workNumber: WORKNUMBER
          },
        })
      let [x] = await Promise.all([
        db.collection('user').where({
          openid: OPENID
        }).get(),
      ])
      let user = x.data[0]
      return {
        success: true,
        data: {
          success: true,
          MSG: '绑定成功',
          user
        }
      }
    }
    if (users.data.length != 0) {

      return {
        success: true,
        data: {
          success: false,
          MSG: '工号已存在',
        }
      }
    }
  } catch (error) {
    return {
      success: false,
      errMsg: e
    };
  }
}