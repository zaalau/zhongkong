// pages/wish/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      showPrivacy: false,
      wordLimit:30,
      ifPic:false,
      ifText:false,
      picSrc:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG131.jpg?sign=c7c405ca6028221b80a32b5120806332&t=1698331075'
    },

    /**
     * 生命周期函数--监听页面加载
     */ 
    addPic() {
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        sizeType:['compressed'],
        camera: 'back',
        success: res=> {
          wx.editImage({
            src: res.tempFiles[0].tempFilePath, // 图片路径
            success: res=> {
              this.setData({
                pic: res.tempFilePath,
                // pic: res.tempFiles[0].tempFilePath,
                picSrc:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG133.jpg?sign=279b08ceb464354d2c7bea7e08af5fa8&t=1698332087',
                ifPic:true
              })
            }
          })
         
        }
        
      })
     
    },
    toDraw() {
      wx.vibrateShort()
      wx.navigateTo({
        url: `../draw/index`
      })
    },
    toHistoryWish() {
      wx.vibrateShort()
      wx.navigateTo({
        url: `../historyWish/index`
      })
    },
    addText(e) {
      const content = e.detail.value.trim()
      const wordCount = e.detail.cursor
      if(content.length&&content.length>0) {
        this.setData({
          ifText:true
        })
      }else {
        this.setData({
          ifText:false
        })
      }
      
      this.setData({
        content,
        wordCount,
      })
     
    },
    addWish() {
      const ifPic = this.data.ifPic
      const ifText = this.data.ifText
      if( !ifPic||!ifText ) {
        wx.vibrateLong()
        wx.showToast({
          icon:"error",
          title: '心愿不完整',
          duration: 1000
        })
      }
      // if( !ifText ) {
      //   wx.vibrateLong()
      //   wx.showToast({
      //     icon:"error",
      //     title: '请填写祝福语',
      //     duration: 1000
      //   })
      // }
      if( ifPic&&ifText ){
        wx.vibrateShort()
      //上传心愿到我的心愿数组
      //跳转当前心愿页
      //恭喜获得抽奖资格

      wx.navigateTo({
        url: `../mywish/index?pic=${this.data.pic}&content=${this.data.content}`
      })
      }
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