// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flower: true,
    seat: false,
    mapBg:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/seatmapbg.webp?sign=4bac0915a13dfd89cddcebc67d0022cd&t=1699432210',
    flowerBg:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/flowerContainerbg.webp?sign=fe621bde7d53b089d57a6b5d106e0b2d&t=1699445342',
    xx:[
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/1%20(1).webp?sign=661f5a402306ddcde2b4558a3e6898d2&t=1699002303',
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/2%20(1).webp?sign=cf99c0b5288aeabd073ddd3645f6d637&t=1699002313',
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/3%20(1).webp?sign=baf917db9406475d2f9875030c7e8fd8&t=1699002323',
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/4%20(1).webp?sign=b119f51340a06a7c61357c06ad099955&t=1699002334',
      'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/5%20(1).webp?sign=a68e2622e2d7356fb542ced925f960e1&t=1699002346',
      
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
  bigpreview() {
    wx.vibrateShort()
   
    wx.previewImage({
      current: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/likeeyebig.webp?sign=6881a7f57484e4afca06ec696916bda0&t=1700118582', // 当前显示图片的http链接
      urls: ['https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/likeeyebig.webp?sign=f13eb309ff018641cc41ef1b9e2ca70f&t=1700133219','https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/yunzhoubig.webp?sign=64036c26cb22820d4a9d37e33489268e&t=1700118593'] // 需要预览的图片http链接列表
    })
  },
  preview2(e) {
    wx.vibrateShort()
    const picSrc = e.currentTarget.dataset.picSrc
    wx.previewImage({
      current: picSrc, // 当前显示图片的http链接
      urls: this.data.xx // 需要预览的图片http链接列表
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
