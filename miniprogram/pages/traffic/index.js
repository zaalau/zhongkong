// pages/traffic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifBottom: false,
    departure: true,
    gohome: false,
    departureBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG177.jpg?sign=2644c9be4648304c91ebbe99453d9246&t=1697100897',
    gohomeBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG7.jpg?sign=97c49b1cf8b3f8bfd5ef05994a5b554b&t=1697249064',
    contentBg: '',
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
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG209.jpg?sign=8068ff2f0c339232ddddb6691056a99f&t=1697183992',
        
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG210.jpg?sign=e781ddc7927d4692c23c59212db24f95&t=1697183966',
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
        picSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG193.jpg?sign=2b17edef044eb7ff3f072700eaf706c1&t=1697186856',
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG192.jpg?sign=bfffee80a62166834401dae56acda9ee&t=1697174716'
      },
      {
        type: 'havePic',
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG209.jpg?sign=8068ff2f0c339232ddddb6691056a99f&t=1697183992',
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG210.jpg?sign=e781ddc7927d4692c23c59212db24f95&t=1697183966',
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
        picSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG226.jpg?sign=921c66c71180eb3263d156240d458746&t=1697192851',
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG213.jpg?sign=120ad17b4bfeb9e3822e1be72f28a716&t=1697192873'
      },
      {
        type: 'havePic',
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG209.jpg?sign=8068ff2f0c339232ddddb6691056a99f&t=1697183992',
        
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG210.jpg?sign=e781ddc7927d4692c23c59212db24f95&t=1697183966',
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
        picSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG230.jpg?sign=8d93ce3172b6ccd03ff8eae52f900215&t=1697193676',
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG215.jpg?sign=2d1e9adb8d05a40cb914d62fab2d9441&t=1697193808'
      },
      {
        type: 'noPic',
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG209.jpg?sign=8068ff2f0c339232ddddb6691056a99f&t=1697183992',
        
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG210.jpg?sign=e781ddc7927d4692c23c59212db24f95&t=1697183966',
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
        
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG217.jpg?sign=e9e1843ac1bd1ad1a252814970b4a807&t=1697194928'
      },
      {
        type: 'noPic',
        contentBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG209.jpg?sign=8068ff2f0c339232ddddb6691056a99f&t=1697183992',
        
        carinfoBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG210.jpg?sign=e781ddc7927d4692c23c59212db24f95&t=1697183966',
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
        
        contentLogo: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG219.jpg?sign=662c43fb306bb9cce1992c88175e0277&t=1697193658'
      }
    ],
    gohomeContent: [
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG8.jpg?sign=577cd551f5c541a98a67cd9d225d6449&t=1697249682',
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
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG242.jpg?sign=1b5bf2c7e020e493aa88717dc817410a&t=1697252233'

      },
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG8.jpg?sign=577cd551f5c541a98a67cd9d225d6449&t=1697249682',
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
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG243.jpg?sign=d5a9a5a7584fd6227f985dbe987c2377&t=1697257720'

      },
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG8.jpg?sign=577cd551f5c541a98a67cd9d225d6449&t=1697249682',
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
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG244.jpg?sign=81dc360a3a187e2de101217c0176d094&t=1697257740'

      },
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG8.jpg?sign=577cd551f5c541a98a67cd9d225d6449&t=1697249682',
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
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG245.jpg?sign=8bf75efa7be0a128647e4c882d4d61d4&t=1697257755'

      },
      {
        bgUrl: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG8.jpg?sign=577cd551f5c541a98a67cd9d225d6449&t=1697249682',
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
        logo:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG246.jpg?sign=189b06176e579244831843292540dfee&t=1697257769'

      }
    ]





  },

  showDeparture() {
    this.setData({
      departure: true,
      gohome: false
    })
  },
  showGohome() {
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
          introContainerHeight: res.windowHeight,
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
