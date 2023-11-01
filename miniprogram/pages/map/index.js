// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flower: true,
    seat: false,
    mapBg:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG343.jpg?sign=9ffcb85793da546a10d756d2e56c062b&t=1697529280',
    flowerBg:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG438.jpg?sign=35fd592f0e3024f25eeabf92d78a9275&t=1698834049',
    xx:[
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG340.jpg?sign=f5d0b2305c3a2b45f2cccecd66a3165d&t=1697531975',
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG18.jpg?sign=deaea5470f4877f3c3d67b079c6753f5&t=1698832629',
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG19.jpg?sign=bc2042fd2c79151e68652077c3102dd8&t=1698832679',
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG21.jpg?sign=20a6ac142d562feebc5186c0b4a86864&t=1698833056',
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG32.jpg?sign=0720ee72bf7e957b7d1dcffd9fd33d25&t=1698833317',
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG33.jpg?sign=a4d5b7fe656447ed47af1c8a2ad8a325&t=1698833893',
    ]
  },
  showFlower() {
    wx.vibrateShort()
    this.setData({
      flower: true,
      seat: false
    })
  },
  showSeat() {
    wx.vibrateShort()
    this.setData({
      flower: false,
      seat: true
    })
  },
  preview(e) {
    wx.vibrateShort()
    const picSrc = e.currentTarget.dataset.picSrc
    wx.previewImage({
      current: picSrc, // 当前显示图片的http链接
      urls: [`${picSrc}`] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          mapContainerHeight: res.windowHeight,
          topBgHeight: 565 * res.windowWidth / 750
        })
      }
    })
    
    wx.loadFontFace({
      family: '熬夜',
      source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/YEZIGONGCHANGAOYEHEI-2.TTF?sign=9ae2d7df8b1fb9c38e05debf464386a3&t=1697024267")',
      scopes: ['webview', 'native'], //由于canvas是原生组件，所以需要加上native，否则无效

      success: function () {}
    })
    wx.loadFontFace({
      family: '锐',
      source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/D2A8C6D467DA6(1).TTF?sign=f682922ab552f0f509624808e08a6924&t=1697535845")',
      scopes: ['webview', 'native'], //由于canvas是原生组件，所以需要加上native，否则无效

      success: function () {}
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
