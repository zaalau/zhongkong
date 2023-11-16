
const cloud = require('wx-server-sdk')
cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
    // 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
    throwOnNotFound: false,
})
const _ = db.command

exports.main = async (event) => {
    let { user } = event;
    try {
        const result = await db.runTransaction(async transaction => {

            let newUser;
            if (user.draw === 1) {
                if (user.openid === 'oUQyO67LsTlVoIBSH5SJRXoSA0g8') {
                    user.gift = '100元京东卡';
                    user.gifttext = '100元京东卡';
                    user.draw = 0;
                    user.drawStatus = 'end';
                    return {
                        MSG: 'heimusuccess',
                        user
                    }
                } else {
                    let prizess = await transaction.collection('prizess').doc('def1da45654ddcfb09de50313a4297c6').get()
                    let prizes = prizess.data.prizes
                    let totalQuantity = 0;
                    // 计算总奖品数量
                    prizes.forEach(prize => {
                        totalQuantity += prize.quantity;
                    });
                    if (totalQuantity === 0) {
                        user.gift = '感恩有你，一路同行';
                        user.gifttext = '很遗憾，你没有抽到奖品哦~';
                        user.draw = 0;
                        user.drawStatus = 'end';
                        return {
                            MSG: '奖池空了',
                            user
                        }
                    } else {
                        // 生成一个随机数，范围在0到总奖品数量之间
                        const randomIndex = Math.floor(Math.random() * totalQuantity);

                        // 根据随机数确定抽中的奖品
                        let currentQuantity = 0;

                        for (const prize of prizes) {
                            currentQuantity += prize.quantity;
                            if (randomIndex < currentQuantity) {
                                user.gift = prize.gift;
                                user.gifttext = prize.gifttext;
                                user.draw = 0;
                                user.drawStatus = 'end';
                                //更新奖池集合信息
                                prize.quantity -= 1;
                                await transaction.collection('prizess').doc('def1da45654ddcfb09de50313a4297c6').update({
                                    data: {
                                        prizes
                                    },
                                })
                                break;
                            }
                        }
                        return {
                            MSG: '抽奖结束',
                            user
                        }
                    }
                }
            } else {
                // 会作为 runTransaction reject 的结果出去
                await transaction.rollback(-100)
            }
        })

        console.log(`transaction succeeded`, result)

        return {
            success: true,
            MSG: result.MSG,
            user: result.user,
        }
    } catch (e) {
        console.error(`transaction error`, e)

        return {
            success: false,
            error: e
        }
    }
}