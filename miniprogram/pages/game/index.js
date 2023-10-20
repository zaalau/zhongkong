// pages/game/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },
    // toSing() {
    //     wx.navigateToMiniProgram({
    //         appId: 'wxc88f41e36c417bff',
    //         path: 'page/index',
    //         // extraData: {
    //         //   foo: 'bar'
    //         // },
    //         envVersion: 'develop',
    //         success(res) {
    //           // 打开成功
    //         }
    //       })
    // },
    
    toPageWish() {
      wx.vibrateShort()
      wx.navigateTo({
        url: `../wish/index`
      })
    },
    toPageDraw() {
      wx.vibrateShort()
      wx.navigateTo({
        url: `../draw/index`
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    // handleXY(e) {
    //   console.log(e.detail.x,e.detail.y)
    // },
    onLoad(options) {
      wx.getSystemInfo({
        success: res => {
          this.setData({
            gameContainerHeight: res.windowHeight,

          })
          // console.log(res.windowWidth,res.windowHeight)
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