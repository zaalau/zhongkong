// pages/draw/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chance: 1,
    igotgift: 'none',
    drawStatus: 'static',
    gift: '',
    ifShowInput: false,
    workNumber: '',
    user: {
      chance: 1,
      openid: '',
      workNumber: '',
      gift: '',
    },
    prizes: [{
        gift: '100元京东卡',
        quantity: 50
      },
      {
        gift: 'kfc心意卡',
        quantity: 100
      },
      {
        gift: '必胜客心意卡',
        quantity: 100
      },
      {
        gift: 'pop mart盲盒',
        quantity: 100
      },
      {
        gift: '喜茶券',
        quantity: 100
      },
      {
        gift: '咖啡券',
        quantity: 50
      },
      {
        gift: '腾讯视频会员',
        quantity: 100
      },
      {
        gift: '网易云音乐会员',
        quantity: 100
      },
      {
        gift: '按摩锤',
        quantity: 100
      },
      {
        gift: '厨房纸',
        quantity: 150
      },
      {
        gift: '卷纸',
        quantity: 150
      },
      {
        gift: '抽纸',
        quantity: 100
      },
      {
        gift: '洗脸巾一包',
        quantity: 200
      },
      {
        gift: '三十周年周边',
        quantity: 100
      },
      {
        gift: '谢谢惠顾',
        quantity: 8500
      },
    ]
  },







  drawPrize() {
    // 计算总奖品数量
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
        // 抽中了这个奖品
        // console.log(`恭喜您抽中了 ${prize.name}`);
        const user = this.data.user
        user.gift = prize.gift
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
          this.drawPrize()
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
      
      this.setData({
        user,
        ifShowInput: false
      })
      wx.showToast({
        icon: "success",
        title: '绑定成功',
        duration: 1000
      })
    } else {
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
    // console.log(Math.floor(Math.random() * (1 - 15)) + 15)
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