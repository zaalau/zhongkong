// pages/draw/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    igotgift: 'none',
    ifShowInput: false,
    workNumber: '',
  },

  drawPrize() {
    // 计算总奖品数量
    const user = this.data.user
    if (user.workNumber === '0000066666') {
      user.gift = '100元京东卡'
      user.gifttext = '100元京东卡'
      this.setData({
        user
      })
    } else {
      let totalQuantity = 0;
      let prizes = this.data.prizes
      prizes.forEach(prize => {
        totalQuantity += prize.quantity;
      });

      // 生成一个随机数，范围在0到总奖品数量之间
      const randomIndex = Math.floor(Math.random() * totalQuantity);

      // 根据随机数确定抽中的奖品
      let currentQuantity = 0;

      for (const prize of prizes) {
        currentQuantity += prize.quantity;
        if (randomIndex < currentQuantity) {
          // 抽中了！
          // const user = this.data.user
          user.gift = prize.gift
          user.gifttext = prize.gifttext
          this.setData({
            user
          })

          // 减少奖品数量
          prize.quantity -= 1;
          break;
        }
      }
      this.setData({
        prizes
      })
      console.log(prizes)
    }



  },

  //点击开始抽奖按钮函数
  draw() {
    //如果抽奖机处于静态(从未抽奖过)
    const {
      draw,
      workNumber,
      drawStatus
    } = this.data.user
    const user = this.data.user
    if (drawStatus === 'static' && this.data.drawStatus === 'static') {
      //如果抽奖次数为0（还没发送心愿）
      wx.vibrateShort({})
      if (draw === 0) {
        wx.vibrateLong()
        wx.showToast({
          icon: "error",
          title: '请发送心愿',
          duration: 1000
        })
      }
      //如果已经发送过心愿
      if (draw === 1) {
        if (workNumber === '') {
          this.setData({
            ifShowInput: true,
            canibind: true
          })
        } else {
          this.setData({
            drawStatus: 'drawing'
          })
          wx.cloud.callFunction({
            // 云函数名称
            name: 'drawing',
            data: {
              user
            },
            success: res => {
              this.setData({
                user:res.result.user
              })

              const MSG = res.result.MSG

              // //开始抽奖，动效播放、抽奖机状态改为抽奖中、减少抽奖次数
              wx.cloud.callFunction({
                // 云函数名称
                name: 'update_user',
                data: {
                  user: res.result.user
                },

                success: res => {
                  var videoplay = wx.createVideoContext('video')
                  this.setData({
                    videoplay,
                  })
                  videoplay.play()
                },
                fail: console.error
              })
            },
            fail: console.error
          })

        }


      }
    }

  },

  //动画播放完毕、抽奖结束函数
  drawEnded() {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'draw_init',
      success: res => {
        console.log(res.result.user);
        this.setData({
          user: res.result.user,
          igotgift: 'yes',

        })
      },
      fail: console.error
    })


    //动效播放完毕即抽奖结束、出现奖品弹窗信息

    //弹窗消失，抽奖全过程结束，抽奖机状态变更为end，抽奖按钮消失
    setTimeout(() => {
      this.setData({
        igotgift: 'sayo',
        drawStatus: 'end'
      })
    }, 4000)
  },

  //关闭工号表单函数
  closeInput() {
    this.setData({
      ifShowInput: false,
      workNumber: ''
    })
  },

  //处理工号值
  handleWorkNum(e) {
    const workNumber = e.detail.value.trim()
    // const user = this.data.user
    // user.workNumber = workNumber

    this.setData({
      workNumber
    })
  },

  //点击表单绑定按钮函数
  sendWorkNum() {

    const {
      workNumber,
      canibind
    } = this.data

    if (canibind) {
      if (workNumber != '') {
        this.setData({
          canibind: false
        })
        wx.cloud.callFunction({
          // 云函数名称
          name: 'bind_worknumber',
          // 传给云函数的参数
          data: {
            WORKNUMBER: workNumber
          },
          success: res => {
            console.log(res)
            const MSG = res.result.data.MSG
            const success = res.result.data.success
            const user = res.result.data.user
            if (success) {
              wx.vibrateShort()
              this.setData({
                user,
                ifShowInput: false
              })
              wx.showToast({
                icon: "success",
                title: MSG,
                duration: 500
              })
            } else {
              if (MSG === 'SOMEONE IS BINDING') {
                this.setData({
                  canibind: true
                })
                this.sendWorkNum()
              }
              wx.vibrateLong()
              wx.showToast({
                icon: "error",
                title: MSG,
                duration: 1000
              })
              this.setData({
                canibind: true
              })
            }

          },
          fail: console.error
        })

      } else {
        wx.vibrateLong()
        wx.showToast({
          icon: "error",
          title: '工号有误',
          duration: 1000
        })
      }
    }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          drawContainerHeight: res.windowHeight,
          ratio: 750 / res.windowWidth,

        })
      }
    })
    wx.cloud.callFunction({
      // 云函数名称
      name: 'draw_init',
      // 传给云函数的参数
      success: res => {
        console.log(res.result.user);
        this.setData({
          user: res.result.user,
          drawStatus: res.result.user.drawStatus,
        })

      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})