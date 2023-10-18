// pages/check/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user: [{
            name: "张三",
            work_number: "10",
            seat: "3排4座",
            checkContainerHeight: '',
          },
          {
            name: "李四",
            work_number: "20",
            seat: "5排6座"
          },
    
        ],
        showTicket: false,
    save: false,
    myTicket:'',
    
    },
    closeCheck() {
        this.setData({
          if_show_checked: false
        })
        wx.reLaunch({
          url: `../home/index?ifShowCheck=${this.data.if_show_checked}`,
        })
      },
      nameHandler(e) {
        this.setData({
          name: e.detail.value
        })
      },
      numberHandler(e) {
        this.setData({
          number: e.detail.value
        })
      },
    checking() {
        const name = this.data.name;
        const number = this.data.number;
        const newUser = this.data.user.map((v, i) => {
          if (name === v.name && number === v.work_number) {
            return {
              ...v,
              checked: true,
              draws: 0
            }
          } else {
            return {
              ...v
            }
          }
        })
        this.setData({
          user: newUser,
          seat: "A区3排9座",
          if_show_checked: false,
          showTicket: true,
        })
    
        // 如果收到座位信息，跳转进入电子门票页面，并开始绘制门票
        wx.createSelectorQuery().select('#canvas').fields({
            node: true,
            size: true
          }).exec((res) => {
            console.log(res)
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
    
      },
      canvasDraw() {
        let img = this.data.canvas.createImage(); //创建img对象
        img.onload = () => {
          //img.complete表示图片是否加载完成，结果返回true和false;
          this.data.ctx.drawImage(img, 0, 0, this.data.canvas._width, this.data.canvas._height);
          // this.data.ctx.fillStyle = '#000';
          this.data.ctx.strokeStyle = "#000";
          this.data.ctx.font = "17px 上首锐圆";
          this.data.ctx.strokeText(this.data.seat, 204, 220);
          
        };
        img.src = "https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG6.jpg?sign=8f7d8c61c82e8a3ab4cc6df1f300d09c&t=1696990206";
    
        setTimeout(()=> {
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            canvas: this.data.canvas,
            success: res=> {
              this.setData({
                myTicket: res.tempFilePath
              })
              console.log(this.data.myTicket)
            }
          })
        },1000)
        
    
      },
    closeTicket() {
        this.setData({
          showTicket: false,
        })
        wx.reLaunch({
          url: `../home/index?ifShowCheck=${this.data.showTicket}`,
        })
        // wx.navigateTo({
        //   url: `../result/index?creationId=${res.result.data.creation_id}&templet_id=${this.data.templet_id}&tplName=${this.data.tpl_display_name}`
        // })
      },
      save() {
        wx.showLoading({
          title: '生成海报中',
        })
        if(this.data.myTicket!='') {
          wx.saveImageToPhotosAlbum({
            filePath: this.data.myTicket,
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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.getSystemInfo({
        success: res => {
          this.setData({
            checkContainerHeight: res.windowHeight,
          })
        }
      })
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
        this.setData({
            if_show_checked: this.data.user[1].checked ? false : true
          })
          wx.loadFontFace({
            family: '粗',
            source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E7%B2%97.OTF?sign=1994f3cc99f15e650ebac2807088af58&t=1697025919")',
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