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
  let { workNumber } = event;

  // 根据 openid 查询用户信息

  let [users] = await Promise.all([
    db.collection('user').where({
      workNumber: workNumber
    }).get(),
  ])

  // 查询不到相同的工号
  if (users.data.length === 0) {
    await db.collection('user').where({
      openid: OPENID
    })
    .update({
      data: {
        workNumber: workNumber
      },
    })
    return {
      success: true,
      data: {
        MSG: '绑定成功'
      }
    };
  }else {
    return {
      success: false,
      data: {
        MSG: '工号已存在'
      }
    }
  }

  

}