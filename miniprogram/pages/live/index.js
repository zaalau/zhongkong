// pages/live/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    save() {
      wx.previewImage({
        current: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/Live%20Card.webp?sign=23b9e297f108a6ca79ec91c135c5548b&t=1699345947', // 当前显示图片的http链接
        urls: ['https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/Live%20Card.webp?sign=23b9e297f108a6ca79ec91c135c5548b&t=1699345947'] // 需要预览的图片http链接列表
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.getSystemInfo({
        success: res => {
          this.setData({
            liveContainerHeight: res.windowHeight,
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