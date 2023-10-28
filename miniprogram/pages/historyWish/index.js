// pages/historyWish/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      historyWishContainerHeight:'',
      historyWishData:['http://tmp/y0nEGRc52k9x039c97b86a2ffe4c281206178132f406.png','http://tmp/y0nEGRc52k9x039c97b86a2ffe4c281206178132f406.png'],
      user:[
        {
          openid:'xxx',
          workNumber:'xxx',//初始化没有这一字段或为空，绑定后添加进去，无法修改
          draw:1,//初始化为0，首次上传心愿且绑定工号后为1
          prize:'',//抽奖后生成
          historyWish:[
            {
              //fileid或src
              fileid:'xx',
              src:'xx'
            },
            {
              fileid:'xx',
              src:'xx'
            },
            {
              fileid:'xx',
              src:'xx'
            },
            {
              fileid:'xx',
              src:'xx'
            },
          ],
          

        }
      ]
    },
    preview() {

       
        wx.previewImage({
          showmenu: true,
          current: 'cloud://zhongkong-0gr2bnjw8020e857.7a68-zhongkong-0gr2bnjw8020e857-1321404713/3aFN48Gbd9XQ602bf8f8649afabf9cd9e47d4a58c1c9.png',// 当前显示图片的http链接
          urls: ['cloud://zhongkong-0gr2bnjw8020e857.7a68-zhongkong-0gr2bnjw8020e857-1321404713/3aFN48Gbd9XQ602bf8f8649afabf9cd9e47d4a58c1c9.png','cloud://zhongkong-0gr2bnjw8020e857.7a68-zhongkong-0gr2bnjw8020e857-1321404713/3aFN48Gbd9XQ602bf8f8649afabf9cd9e47d4a58c1c9.png','cloud://zhongkong-0gr2bnjw8020e857.7a68-zhongkong-0gr2bnjw8020e857-1321404713/3aFN48Gbd9XQ602bf8f8649afabf9cd9e47d4a58c1c9.png','cloud://zhongkong-0gr2bnjw8020e857.7a68-zhongkong-0gr2bnjw8020e857-1321404713/3aFN48Gbd9XQ602bf8f8649afabf9cd9e47d4a58c1c9.png'] // 需要预览的图片http链接列表
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