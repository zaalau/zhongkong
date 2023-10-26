// pages/mywish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myWish: []
  },
  save() {
    wx.showLoading({
      title: '保存中',
    })
    if (this.data.myTicket != '') {
      wx.saveImageToPhotosAlbum({
        filePath: this.data.mywish,
        success(res) {
          wx.hideLoading()
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 1000
          })
        }
      })
    }


  },
  canvasDraw() {
    let img = this.data.canvas.createImage(); //创建img对象
    img.onload = () => {
      //img.complete表示图片是否加载完成，结果返回true和false;
      this.data.ctx.drawImage(img, 0, 0, this.data.canvas._width, this.data.canvas._height);
      this.data.ctx.font = "22px 细";
      const month = new Date().getMonth() + 1
      const day = new Date().getDate()
      this.data.ctx.fillText(`${month} / ${day}`, 208, 31);
      this.data.ctx.font = "15px Microsoft YaHei";

      if (this.data.content.length <= 10) {
        this.data.ctx.fillText(this.data.content, 16, 360);
      }
      if (this.data.content.length > 10 && this.data.content.length <= 20) {
        this.data.ctx.fillText(`${this.data.content[0]}${this.data.content[1]}${this.data.content[2]}${this.data.content[3]}${this.data.content[4]}${this.data.content[5]}${this.data.content[6]}${this.data.content[7]}${this.data.content[8]}${this.data.content[9]}`, 16, 360);
        const content2 = this.data.content.slice(10)
        this.data.ctx.fillText(content2, 16, 385);
      }
      if (this.data.content.length > 20) {
        this.data.ctx.fillText(`${this.data.content[0]}${this.data.content[1]}${this.data.content[2]}${this.data.content[3]}${this.data.content[4]}${this.data.content[5]}${this.data.content[6]}${this.data.content[7]}${this.data.content[8]}${this.data.content[9]}`, 16, 360);
        this.data.ctx.fillText(`${this.data.content[10]}${this.data.content[11]}${this.data.content[12]}${this.data.content[13]}${this.data.content[14]}${this.data.content[15]}${this.data.content[16]}${this.data.content[17]}${this.data.content[18]}${this.data.content[19]}`, 16, 385);
        const content3 = this.data.content.slice(20)
        this.data.ctx.fillText(content3, 16, 410);
      }


      
      let img2 = this.data.canvas.createImage(); //创建img对象
      img2.onload = () => {
        this.data.ctx.drawImage(img2, 57, 64, 223, 258);
        this.data.ctx.font = "21px 哈";
        this.data.ctx.strokeStyle = "#ffffff70";
        this.data.ctx.strokeText('happy', 183, 300);
        this.data.ctx.strokeText('BIRTHDAY', 130, 321);
        this.data.ctx.fillStyle = "white";
        this.data.ctx.fillRect(90, 64, 12, 258)
        let img3 = this.data.canvas.createImage(); //创建img对象
        img3.onload = () => {
          this.data.ctx.drawImage(img3, 223, 354, 55, 55);

        };
        img3.src = 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/gh_b801b050bfba_258.jpg?sign=f27e45cd5156e20b71f9ddb4a128581d&t=1698068235'
      };
      img2.src = this.data.pic


    };
    img.src = "https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG427.jpg?sign=b1989a39f6a2216dbcf32bd936087093&t=1698064478";



    setTimeout(() => {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        canvas: this.data.canvas,
        success: res => {
          this.setData({
            mywish: res.tempFilePath
          })
        }
      })
    }, 1000)


  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad(options) {
  //     const myWish = this.data.myWish
  //     myWish.push(options)
  //     console.log(options,this.data.myWish)
  //     this.setData({
  //         myWish: myWish
  //     })
  // },
  onLoad(options) {
    // const content = options.content

    this.setData({
      pic: options.pic,
      content: options.content
    })
    wx.getSystemInfo({
      success: res => {
        this.setData({
          mywishContainerHeight: res.windowHeight
        })
      }
    })
    wx.createSelectorQuery().select('#canvas').fields({
      node: true,
      size: true
    }).exec((res) => {
      // console.log(res)
      // Canvas 对象
      const canvas = res[0].node
      // Canvas 画布的实际绘制宽高
      const renderWidth = res[0].width
      const renderHeight = res[0].height
      // Canvas 绘制上下文
      const ctx = canvas.getContext('2d')

      // 初始化画布大小
      const dpr = wx.getWindowInfo().pixelRatio
      canvas.width = renderWidth * dpr
      canvas.height = renderHeight * dpr

      ctx.scale(dpr, dpr)
      // console.log(canvas)
      this.setData({
        canvas,
        ctx,
        dpr
      })
      this.canvasDraw()

    })
    wx.loadFontFace({
      family: '哈',
      source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/B6E4F129E574E.OTF?sign=d9334a1e710aebfd434d349c55e5dd33&t=1698064541")',
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
