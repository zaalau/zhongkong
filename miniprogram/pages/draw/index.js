// pages/draw/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chance: 1,
    igotgift: 'none',
    drawStatus: 'static',
    gift: '网易云音乐会员',
    ifShowInput: false,
    workNumber: '',
    user: {
      chance: 1,
      openid: '',
      workNumber: '',
      gift: '',
    }
  },







  draw() {
    //如果抽奖机处于静态(从未抽奖过)
    const drawStatus = this.data.drawStatus
    if (drawStatus === 'static') {
      //如果抽奖次数为0（还没发送心愿）
      wx.vibrateShort({})
      if (this.data.chance === 0) {
        wx.vibrateLong()
        wx.showToast({
          icon: "error",
          title: '请发送心愿',
          duration: 1000
        })
      }
      //如果已经发送过心愿
      if (this.data.chance === 1) {
        if (this.data.user.workNumber === '') {
          this.setData({
            ifShowInput: true
          })
        } else {
          //开始抽奖，动效播放、抽奖机状态改为抽奖中、减少抽奖次数
          var videoplay = wx.createVideoContext('video')
          this.setData({
            videoplay,
            chance: 0,
            drawStatus: 'drawing'
          })
          videoplay.play()
        }


      }
    }

  },
  drawEnded() {

    //动效播放完毕即抽奖结束、出现奖品弹窗信息
    this.setData({
      igotgift: 'yes',

    })
    //弹窗消失，抽奖全过程结束，抽奖机状态变更为end，抽奖按钮消失
    setTimeout(() => {
      // const videoplay = this.data.videoplay
      // videoplay.seek(0)
      this.setData({
        igotgift: 'sayo',
        drawStatus: 'end'
      })
    }, 4000)
  },
  closeInput() {
    this.setData({
      ifShowInput: false,
      workNumber: ''
    })
  },
  handleWorkNum(e) {
    const workNumber = e.detail.value.trim()
    // const user = this.data.user
    // user.workNumber = workNumber
    this.setData({
      workNumber
    })
  },
  sendWorkNum() {

    const {
      user,
      workNumber,
      gift
    } = this.data
    if (workNumber != '') {
      wx.vibrateShort()
      user.workNumber = workNumber
      user.gift = gift
      this.setData({
        user,
        ifShowInput: false
      })
      wx.showToast({
        icon: "success",
        title: '绑定成功',
        duration: 1000
      })
    }else {
      wx.vibrateLong()
      wx.showToast({
        icon: "error",
        title: '工号有误',
        duration: 1000
      })
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
          ratio: 750 / res.windowWidth
        })
      }
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