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
  try {
    let [users] = await Promise.all([
      db.collection('user').where({
        openid: OPENID
      }).get(),
    ])
    let { historyWish } = users.data[0]
  
    return {
      historyWish
    }
  } catch (error) {
    return {
      success: false,
      errMsg: error
    };
  }
  
}