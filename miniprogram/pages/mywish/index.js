// pages/mywish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isloading:true,
    canvasstyle:'position:fixed;top:8000px'
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
  share() {
    const mywish = this.data.mywish
    wx.showShareImageMenu({
      path: mywish
    })
  },
  canvasDraw() {
    let img = this.data.canvas.createImage(); //创建img对象
    img.onload = () => {
      //img.complete表示图片是否加载完成，结果返回true和false;
      this.data.ctx.drawImage(img, 0, 0, this.data.canvas._width, this.data.canvas._height);
      this.data.ctx.font = `${38/this.data.ratio}px 细`;
      const month = new Date().getMonth() + 1
      const day = new Date().getDate()
      const ratio = this.data.ratio
      this.data.ctx.fillText(`${month} / ${day}`, 400/ratio, 60/ratio);
      this.data.ctx.font = `${29/this.data.ratio}px 细`;

      if (this.data.content.length <= 10) {
        this.data.ctx.fillText(this.data.content, 31/ratio, 692/ratio);
      }
      if (this.data.content.length > 10 && this.data.content.length <= 20) {
        this.data.ctx.fillText(`${this.data.content[0]}${this.data.content[1]}${this.data.content[2]}${this.data.content[3]}${this.data.content[4]}${this.data.content[5]}${this.data.content[6]}${this.data.content[7]}${this.data.content[8]}${this.data.content[9]}`, 31/ratio, 692/ratio);
        const content2 = this.data.content.slice(10)
        this.data.ctx.fillText(content2, 31/ratio, 740/ratio);
      }
      if (this.data.content.length > 20) {
        this.data.ctx.fillText(`${this.data.content[0]}${this.data.content[1]}${this.data.content[2]}${this.data.content[3]}${this.data.content[4]}${this.data.content[5]}${this.data.content[6]}${this.data.content[7]}${this.data.content[8]}${this.data.content[9]}`, 31/ratio, 692/ratio);
        this.data.ctx.fillText(`${this.data.content[10]}${this.data.content[11]}${this.data.content[12]}${this.data.content[13]}${this.data.content[14]}${this.data.content[15]}${this.data.content[16]}${this.data.content[17]}${this.data.content[18]}${this.data.content[19]}`, 31/ratio, 740/ratio);
        const content3 = this.data.content.slice(20)
        this.data.ctx.fillText(content3, 31/ratio, 788/ratio);
      }


      
      let img2 = this.data.canvas.createImage(); //创建img对象
      img2.onload = () => {
        const sx = this.data.sx;
        const sy = this.data.sy;
        const swidth = this.data.swidth;
        const sheight = this.data.sheight;
        this.data.ctx.drawImage(img2,sx,sy,swidth, sheight,110/ratio, 123/ratio,429/ratio, 496/ratio);
        // this.data.ctx.font = '21px 哈';
        this.data.ctx.font = `${40/this.data.ratio}px 哈`;
        this.data.ctx.strokeStyle = "#ffffff70";
        this.data.ctx.strokeText('HAPPY', 352/ratio, 577/ratio);
        this.data.ctx.strokeText('BIRTHDAY', 250/ratio, 617/ratio);
        this.data.ctx.fillStyle = "white";
        this.data.ctx.fillRect(173/ratio, 123/ratio, 23/ratio, 496/ratio)
        
      };
      img2.src = this.data.pic


    };
    img.src = "https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wishbg.webp?sign=e1c86dec3faf7a64a2d9022b7c59e396&t=1699414548";


   
    setTimeout(() => {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        canvas: this.data.canvas,
        success: res => {
          const mywish = res.tempFilePath
          wx.cloud.uploadFile({
            cloudPath: 'userswish/' + Math.floor(Math.random()*1000000),
            filePath: mywish, // 文件路径
            success: res => {
              wx.cloud.callFunction({
                // 云函数名称
                name: 'upload_wish',
                // 传给云函数的参数
                data: {
                  mywish:res.fileID
                },
                success: res => {
                  this.setData({
                    mywish,
                    isloading:false,
                    canvasstyle:''
                  })
                  wx.hideLoading()
                },
                fail: console.error
              })
              
            },
            fail: err => {
              // handle error
            }
          })
          
          
          
        }
      })
    }, 500)


  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad(options) {
    // const content = options.content
    // console.log(options.pic)
    wx.showLoading({
      title: '绘制中',
    })
    
    
    
    this.setData({
      
      pic: options.pic,
      content: options.content,
      sx: options.sx,
      sy: options.sy,
      swidth: options.swidth,
      sheight: options.sheight
    })
    wx.getSystemInfo({
      success: res => {
        this.setData({
          mywishContainerHeight: res.windowHeight,
          ratio: 750/res.windowWidth
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
     
      this.setData({
        canvas,
        ctx,
        dpr
      })
      this.canvasDraw()
      //将画好的心愿上传到云存储
      
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
