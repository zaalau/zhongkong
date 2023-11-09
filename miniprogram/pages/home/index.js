// pages/homee/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    if_show_check: true

  },
  toPageIntro() {
    wx.vibrateShort()
    wx.navigateTo({
      url: `../intro/index`
    })
  },
  // toPageLive() {
  //   wx.vibrateShort()
  //   wx.navigateTo({
  //     url: '/pages/web/web?url=' + 'www.baidu.com'
  //   })
  // },
  toPageGame() {
    wx.vibrateShort()
    wx.navigateTo({
      url: `../game/index`
    })
  },
  toPageTraffic() {
    wx.vibrateShort()
    wx.navigateTo({
      url: `../traffic/index`
    })
  },
  toPageMap() {
    wx.vibrateShort()
    wx.navigateTo({
      url: `../map/index`
    })
  },
  toPageLive() {
    wx.vibrateShort()
    wx.navigateTo({
      url: `../live/index`
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'home_init',
      // 传给云函数的参数
      success: function(res) {
        console.log(res.result)
      },
      fail: console.error
    })
    wx.getSystemInfo({
      success: res => {
        this.setData({
          homeContainerHeight: res.windowHeight,
          ratio:750/res.windowWidth
        })
      }
    })
    


    wx.loadFontFace({
      family: '上首锐圆',
      source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/D2A8C6D467DA6.TTF?sign=b6fefba0b9b63f6159190a0837c91440&t=1697000814")',
      scopes: ['webview', 'native'], //由于canvas是原生组件，所以需要加上native，否则无效

      success: function () {

      }
    })
    wx.loadFontFace({
      family: '粗',
      source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E7%B2%97.OTF?sign=1994f3cc99f15e650ebac2807088af58&t=1697025919")',
      scopes: ['webview', 'native'], //由于canvas是原生组件，所以需要加上native，否则无效

      success: function () {}
    })
    const backgroundAudioManager = wx.getBackgroundAudioManager()

    backgroundAudioManager.title = "friday i'm in love"
    // backgroundAudioManager.epname = '此时此刻'
    // backgroundAudioManager.singer = '许巍'

    // 设置了 src 之后会自动播放
    backgroundAudioManager.src = "https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/The-Cure-Friday-I_m-In-Love.m4a?sign=71b72364d62e3c4e9643b677e612176e&t=1698742420"
    backgroundAudioManager.onEnded(function () {
      // 2、必须重新设置src才能循环之后会自动播放
      backgroundAudioManager.src = "https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/The-Cure-Friday-I_m-In-Love.m4a?sign=71b72364d62e3c4e9643b677e612176e&t=1698742420"
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