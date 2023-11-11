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
        db.collection('user').where({
            isbinding: false
        }).get(),
    ])
    // 如果找不到isbinding为false的数据，则别人正在绑定中
    if (lock.data.length === 0) {
        // 存在锁标记，其他函数正在删除该数据，放弃删除操作
        return {
            success: true,
            data: {
                success: false,
                MSG: 'SOMEONE IS BINDING',
            }
        }
    }
    // 查询、绑定工号前先将isbinding更新为true
    await db.collection('user').where({
        isbinding: false
    })
        .update({
            data: {
                isbinding: true
            },
        })
    // 进入到查询、绑定工号的逻辑
    try {
        const {
            OPENID
        } = cloud.getWXContext();
        const {
            WORKNUMBER
        } = event;
        // 根据 工号 查询用户信息
        let [users] = await Promise.all([
            db.collection('user').where({
                workNumber: WORKNUMBER
            }).get(),
        ])
        console.log(users, WORKNUMBER)
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
            // 绑定成功后将lock锁打开
            await db.collection('user').where({
                isbinding: true
            })
                .update({
                    data: {
                        isbinding: false
                    },
                })
            // 将新的user信息return出去
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
        // 查询到工号已存在
        if (users.data.length != 0) {
            // 也需要将lock锁打开
            await db.collection('user').where({
                isbinding: true
            })
                .update({
                    data: {
                        isbinding: false
                    },
                })
            return {
                success: true,
                data: {
                    success: false,
                    MSG: '工号已存在',
                }
            }
        }
    } catch (error) {
        // 捕捉到错误也需要将lock锁打开
        await db.collection('user').where({
            isbinding: true
        })
            .update({
                data: {
                    isbinding: false
                },
            })
        return {
            success: false,
            errMsg: error
        };
    }
}