// pages/wish/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      showPrivacy: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */ 
    addPic() {
      wx.chooseMedia({
        count: 9,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        maxDuration: 30,
        camera: 'back',
        success: res=> {
          this.setData({
            pic: res.tempFiles[0].tempFilePath
          })
        }
        
      })
     
    },
    toDraw() {
      wx.navigateTo({
        url: `../draw/index`
      })
    },
    addText(e) {
      this.setData({
        text: e.detail.value
      })
    },
    addWish() {
      wx.navigateTo({
        url: `../mywish/index?pic=${this.data.pic}&text=${this.data.text}`
      })
    },
    toMyWish() {
        wx.navigateTo({
          url: '../mywish/index',
        })
    },

    onLoad(options) {
      wx.getSystemInfo({
        success: res => {
          this.setData({
            wishContainerHeight: res.windowHeight
          })
        }
      })
      // wx.getPrivacySetting({
      //   success: res => {
      //     // console.log(res) // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
      //     if (res.needAuthorization) {
      //       // 需要弹出隐私协议
      //       this.setData({
      //         showPrivacy: true
      //       })
      //     } else {
      //       // 用户已经同意过隐私协议，所以不需要再弹出隐私协议，也能调用已声明过的隐私接口
      //       // wx.getUserProfile()
      //       // wx.chooseMedia()
      //       // wx.getClipboardData()
      //       // wx.startRecord()
      //     }
      //   },
      //   fail: () => {},
      //   complete: () => {}
      // })
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