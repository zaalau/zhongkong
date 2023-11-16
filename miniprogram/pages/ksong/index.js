// pages/ksong/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    toTheTop() {
      wx.vibrateShort()
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 200
      })
    },
    onPageScroll: function (e) {
      // console.log(e.scrollTop)
      const { ratio } = this.data
      if (e.scrollTop > 340/ratio) {
        this.setData({
          ifBottom: true
        })
      } else {
        this.setData({
          ifBottom: false
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
            ksongContainerHeight: res.windowHeight,
            ratio:750/res.windowWidth
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