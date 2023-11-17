// pages/historyWish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyWishContainerHeight: '',
  },
  preview(e) {

    const picSrc = e.currentTarget.dataset.picSrc
    const urlsArr = []
    let historyWish = this.data.historyWish
    historyWish.forEach(mywish => {
      urlsArr.push(mywish.mywish)
    });

    wx.previewImage({
      showmenu: true,
      current: picSrc, // 当前显示图片的http链接
      urls: urlsArr // 需要预览的图片http链接列表
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          historyWishContainerHeight: res.windowHeight,
        })
      }
    })
    wx.showLoading({
      title: '加载中',
    })
    
    wx.cloud.callFunction({
      // 云函数名称
      name: 'history_wish',
      // 传给云函数的参数
      success: res => {
        console.log(res.result.historyWish);
        this.setData({
          historyWish: res.result.historyWish
        })
        wx.hideLoading()
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