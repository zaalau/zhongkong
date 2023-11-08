// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  // return {
  //     event,
  //     openid: wxContext.OPENID,

  // }
  const historyWish = []
  historyWish.push(event)
  let {
    OPENID
  } = cloud.getWXContext();
  let user;

  // 根据 openid 查询用户信息
  
  let [users] = await Promise.all([
    db.collection('user').where({
      openid: OPENID
    }).get(),
  ])
  // 查询不到信息，说明是新用户，创建用户
  if (users.data.length === 0) {
    const newUser = {
      openid: OPENID, // 创建用户 openid
      create_time: new Date(), // 创建时间
      draw: 1,
      workNumber: '',
      gift: '',
      giftText: '',
      historyWish,
      extent_info: {} // 扩展信息，空对象
    }
    await db.collection('user').add({
      data: newUser
    })
    user = newUser
  } else {
    
    // 默认取查到的第一个user记录
    
    await db.collection('user').where({
      openid: OPENID
    })
    .update({
      data: {
        historyWish:_.push(event)
      },
    })
  }

  // 上次海报介绍时间大于间隔天数，则 if_show_introduce 为true

  return {
    success: true,
    data: {
      xx: '1111'
    }
  };

}