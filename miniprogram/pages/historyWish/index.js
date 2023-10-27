// pages/historyWish/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      historyWishContainerHeight:'',
      historyWishData:['http://tmp/y0nEGRc52k9x039c97b86a2ffe4c281206178132f406.png','http://tmp/y0nEGRc52k9x039c97b86a2ffe4c281206178132f406.png']
    },
    preview() {

       
        wx.previewImage({
          showmenu: true,
          current: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/5IfntoH28Ggh0b441766775fca3300be8dd0cf21f578.png?sign=4c798b4e1dd040016f4397200f74efe5&t=1698398594',// 当前显示图片的http链接
          urls: ['https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/5IfntoH28Ggh0b441766775fca3300be8dd0cf21f578.png?sign=4c798b4e1dd040016f4397200f74efe5&t=1698398594','https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/5IfntoH28Ggh0b441766775fca3300be8dd0cf21f578.png?sign=4c798b4e1dd040016f4397200f74efe5&t=1698398594','https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/5IfntoH28Ggh0b441766775fca3300be8dd0cf21f578.png?sign=4c798b4e1dd040016f4397200f74efe5&t=1698398594','https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/5IfntoH28Ggh0b441766775fca3300be8dd0cf21f578.png?sign=4c798b4e1dd040016f4397200f74efe5&t=1698398594',] // 需要预览的图片http链接列表
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