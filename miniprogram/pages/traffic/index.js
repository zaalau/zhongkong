// pages/traffic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifBottom: false,
    departure: true,
    gohome: false,
    departureBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/departurebg.webp?sign=1d7bf39efe7f368d661a620ad8cb0e90&t=1699414979',
    gohomeBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/gohomebg.webp?sign=7563e55e108c425aff10994a1aa57739&t=1699427688',
    contentBg:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/departurecontentbg.webp?sign=3c2c164d172a6a3e85f1d3525a1c085a&t=1699421997',
    tabNE: [{
      class: 'departureTab',
      logo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG173.jpg?sign=21e10ac3764790f80575a8330d6856ae&t=1697099854',
      fontSize: '60rpx',
      color: '#35180c',
      boxShadow: '8rpx -9rpx 10rpx #9e922360',
      width: '60%',
      height: '125rpx',
      fontSize2: '42rpx',
      color2: 'rgba(53,24,12,0.6)',
      boxShadow2: '0rpx -9rpx 10rpx #66028e50 inset',
      width2: '40%',
      height2: '80rpx',
      text: '发车',
      logoClass:'tabLogo',
      textClass:'departureText'
    }, {
      class: 'gohomeTab',
      logo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG188.jpg?sign=d8b247db4712c8c344855fc087ab0f63&t=1697163112',
      fontSize: '60rpx',
      color: '#2b467c',
      boxShadow: '-8rpx -9rpx 10rpx #66028e60',
      width: '60%',
      height: '125rpx',
      fontSize2: '42rpx',
      color2: 'rgba(43,70,124,0.6)',
      boxShadow2: '0rpx -9rpx 10rpx #9e922360 inset',
      width2: '40%',
      height2: '80rpx',
      text: '回程',
      logoClass:'tabLogo2',
      textClass:'departureText2'

    }
  ],
    departuretContent:[
      {
        type: 'havePic',
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/departurecontentbg.webp?sign=3c2c164d172a6a3e85f1d3525a1c085a&t=1699421997',
        
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/carinfobg.webp?sign=29e856edf48182cee31588ba4a5766da&t=1699421769',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG196.jpg?sign=c1ab84e33e2dc02b6e51f1ac2440c44c&t=1697177026',
        title: '中控科技园',
        timeTitle: '发车时间',
        timeText:[
          {
            text:'第一批：11:30'
          },
          {
            text:'第二批：12:30'
          }
        ],
        carPosition: '发车地点',
        carText: '中控科技园（循环发车，坐满即走）',
        picSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/zkkjy.webp?sign=ed856e76ab49a5c208eb00ed630943fd&t=1699517443',
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/sredcar.webp?sign=b10eec230ad87592dac866ea9affd0fc&t=1699417430'
      },
      {
        type: 'havePic',
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/departurecontentbg.webp?sign=3c2c164d172a6a3e85f1d3525a1c085a&t=1699421997',
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/carinfobg.webp?sign=29e856edf48182cee31588ba4a5766da&t=1699421769',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG212.jpg?sign=6749a0410462246cc08fb7ff34d9af3c&t=1697192770',
        title: '中控信息大厦',
        timeTitle: '发车时间',
        timeText:[
        
          {
            text:'12:50（32-49号车，循序发车）'
          }
        ],
        carPosition: '发车地点',
        carText: '中控信息大厦（循环发车，坐满即走）',
        picSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/zkxxds.webp?sign=fe6b064f74277fe3540e5c7747045c4a&t=1699517461',
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/spurcar.webp?sign=f16e47ff331be24fa2e243ecdedc2b59&t=1699417652'
      },
      {
        type: 'havePic',
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/departurecontentbg.webp?sign=3c2c164d172a6a3e85f1d3525a1c085a&t=1699421997',
        
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/carinfobg.webp?sign=29e856edf48182cee31588ba4a5766da&t=1699421769',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG214.jpg?sign=6f790cec2c03bace86d9d4ec7960ac13&t=1697193797',
        title: '富阳产业园',
        timeTitle: '发车时间',
        timeText:[
          {
            text:'11:30（2-16号车，循序发车）'
          },
        ],
        carPosition: '发车地点',
        carText: '富阳产业园（循环发车，坐满即走）',
        picSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fycyy.webp?sign=ec1a21bd125dd2c8dea78e04bba3fa04&t=1699517486',
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/sbluecar.webp?sign=6560d2d87678b35e04068fb2d607b56c&t=1699417789'
      },
      {
        type: 'noPic',
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/departurecontentbg.webp?sign=3c2c164d172a6a3e85f1d3525a1c085a&t=1699421997',
        
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/carinfobg.webp?sign=29e856edf48182cee31588ba4a5766da&t=1699421769',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG216.jpg?sign=95a79af5759c73da1e55bf18bb1496ee&t=1697194959',
        title: '教仪工厂（富阳）',
        timeTitle: '发车时间',
        timeText:[
          {
            text:'11:30（1号车）'
          },
        ],
        carPosition: '发车地点',
        carText: '教仪工厂（富阳）（循环发车，坐满即走）',
        
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/syellowcar.webp?sign=642b6d6e9ac37c977bb642967c101205&t=1699418159'
      },
      {
        type: 'noPic',
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/departurecontentbg.webp?sign=3c2c164d172a6a3e85f1d3525a1c085a&t=1699421997',
        
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/carinfobg.webp?sign=29e856edf48182cee31588ba4a5766da&t=1699421769',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG218.jpg?sign=40461833a85f205e4e5d017c5fc2dee2&t=1697193640',
        title: '金盛产业园',
        timeTitle: '发车时间',
        timeText:[
          {
            text:'12:35（17号车）'
          },
        ],
        carPosition: '发车地点',
        carText: '金盛产业园（循环发车，坐满即走）',
        
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/slightbluecar.webp?sign=b8729381d0bde5c5a94dd9541cfcc5dc&t=1699418277'
      }
    ],
    gohomeContent: [
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/gohomeInfobgurl.webp?sign=e6b375037c20ab518b70087cd1bc4b7f&t=1699429253',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG196.jpg?sign=c1ab84e33e2dc02b6e51f1ac2440c44c&t=1697177026',
        title: '中控科技园',
        gohomeDetail: [
          {
            gohomeTitle:'返程时间:',
            gohomeText: [
              {
                text: '第一批：17:15'
              },
              {
                text: '第二批：18:15'
              }
            ]
          },
          {
            gohomeTitle:'返程地点:',
            gohomeText: [
              {
                text: '小莲花1号门36-70号车、小莲花1号门36-70号车'
              },
            ]
          },
          {
            gohomeTitle:'地铁线路指南:',
            gohomeText: [
              {
                text: '小莲花1号门-6号线奥体中心地铁站C口桂花西路方向-中医药大学地铁站B口'
              },
            ]
          }
        ],
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/bredcar.webp?sign=ce2e87a9e3b8e43a84e0f7e13c8c507a&t=1699418648'

      },
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/gohomeInfobgurl.webp?sign=e6b375037c20ab518b70087cd1bc4b7f&t=1699429253',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG18.jpg?sign=5243dacbec3c7a7e2583080763f34ac9&t=1697258094',
        title: '中控信息大厦',
        gohomeDetail: [
          {
            gohomeTitle:'返程时间:',
            gohomeText: [
              {
                text: '17:35'
              },
              
            ]
          },
          {
            gohomeTitle:'返程地点:',
            gohomeText: [
              {
                text: '小莲花1号门18-35号车'
              },
            ]
          },
          {
            gohomeTitle:'地铁线路指南:',
            gohomeText: [
              {
                text: '小莲花1号门-6号线奥体中心地铁站C口桂花西路方向-长河地铁站换乘-5号线长河地铁站（姑娘桥方向）-聚才路地铁站C口'
              },
            ]
          }
        ],
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/bpurcar.webp?sign=bac77b41992f44a5464b13872045d2ef&t=1699418680'

      },
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/gohomeInfobgurl.webp?sign=e6b375037c20ab518b70087cd1bc4b7f&t=1699429253',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG19.jpg?sign=3ad4e87f2bc4eb5aa66443beb0e131f5&t=1697258138',
        title: '富阳产业园',
        gohomeDetail: [
          {
            gohomeTitle:'返程时间:',
            gohomeText: [
              {
                text: '17:25'
              },
            ]
          },
          {
            gohomeTitle:'返程地点:',
            gohomeText: [
              {
                text: '小莲花1号门2-16号车'
              },
            ]
          },
          {
            gohomeTitle:'地铁线路指南:',
            gohomeText: [
              {
                text: '小莲花1号门-6号线奥体中心地铁站C口桂花西路方向-高桥地铁站D口-地铁高桥站D口公交站（车管所方向）-邦德公交站'
              },
            ]
          }
        ],
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/bbluecar.webp?sign=1fd982925f3f6fa822034506f1a7f533&t=1699418690'

      },
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/gohomeInfobgurl.webp?sign=e6b375037c20ab518b70087cd1bc4b7f&t=1699429253',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG20.jpg?sign=18d29a8cc53ad381916f9db4c2ac17d5&t=1697258150',
        title: '教仪工厂（富阳）',
        gohomeDetail: [
          {
            gohomeTitle:'返程时间:',
            gohomeText: [
              {
                text: '17:25'
              },
            ]
          },
          {
            gohomeTitle:'返程地点:',
            gohomeText: [
              {
                text: '小莲花1号门附近1号车'
              },
            ]
          },
          {
            gohomeTitle:'地铁线路指南:',
            gohomeText: [
              {
                text: '小莲花1号门-6号线奥体中心地铁站C口桂花西路方向-高桥地铁站D口-地铁高桥站D口公交站（车管所方向）-临时站1公交站'
              },
            ]
          }
        ],
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/byellowcar.webp?sign=35eb4ef6063ac50a4550d62f910772f4&t=1699418703'

      },
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/gohomeInfobgurl.webp?sign=e6b375037c20ab518b70087cd1bc4b7f&t=1699429253',
        titleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG21.jpg?sign=d03a2f69617c4e3622cd2499d4240459&t=1697258162',
        title: '金盛产业园',
        gohomeDetail: [
          {
            gohomeTitle:'返程时间:',
            gohomeText: [
              {
                text: '17:20'
              },
            ]
          },
          {
            gohomeTitle:'返程地点:',
            gohomeText: [
              {
                text: '小莲花1号门附近17号车'
              },
            ]
          },
          {
            gohomeTitle:'地铁线路指南:',
            gohomeText: [
              {
                text: '小莲花1号门-6号线奥体中心地铁站C口桂花西路方向-4号线中医药大学地铁站浦沿方向-浦沿地铁站A口'
              },
            ]
          }
        ],
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/blightbluecar.webp?sign=0bfd014cff1794c7627ac5d4772c64f7&t=1699418722'

      }
    ]





  },

  showDeparture() {
    wx.vibrateShort()
    this.setData({
      departure: true,
      gohome: false
    })
  },
  showGohome() {
    wx.vibrateShort()
    this.setData({
      departure: false,
      gohome: true,

    })
  },
  preview(e) {
    const picSrc = e.currentTarget.dataset.picSrc
    wx.previewImage({
      current: picSrc, // 当前显示图片的http链接
      urls: [`${picSrc}`] // 需要预览的图片http链接列表
    })
  },
  toTheTop() {
    wx.vibrateShort()
    wx.pageScrollTo({
      scrollTop:0,
      duration:300
    })
  },
  onPageScroll: function(e) {
    if(e.scrollTop > this.data.topBgHeight) {
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
          topBgHeight: 694 * res.windowWidth / 750
        })
      }
    })
    wx.loadFontFace({
      family: '熬夜',
      source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/YEZIGONGCHANGAOYEHEI-2.TTF?sign=9ae2d7df8b1fb9c38e05debf464386a3&t=1697024267")',
      scopes: ['webview', 'native'], //由于canvas是原生组件，所以需要加上native，否则无效

      success: function () {}
    })
    wx.loadFontFace({
      family: '粗',
      source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E7%B2%97.OTF?sign=1994f3cc99f15e650ebac2807088af58&t=1697025919")',
      scopes: ['webview', 'native'], //由于canvas是原生组件，所以需要加上native，否则无效

      success: function () {}
    })
    wx.loadFontFace({
      family: '细',
      source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E4%B8%8A.OTF?sign=0d441ceb51bf2f2d0c05ea2eaba72de5&t=1697026063")',
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
    // wx.createSelectorQuery().select('#scroll-y').boundingClientRect(function(rect){
    //   使页面滚动到底部
    //   wx.pageScrollTo({
    //     scrollTop: rect.height,
    //     duration:500 //设置滚动延时
    //   })
    // }).exec()
    
  
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
