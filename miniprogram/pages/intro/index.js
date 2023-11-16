// pages/intro/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    process: true,
    thirty:  false,
    introContainerHeight: '',
    processBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/introthirtybg.webp?sign=a265d54b2eebdf7641c871a844b70b7f&t=1699421194',
    thirtyBg:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/WechatIMG265-_1_.webp?sign=645c7e81dc892bcf43a697ecea52ba0a&t=1698912959',

    ourThirty: [
        {
      type: 'timeline',
      bgsrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/ourthirtybgsrc.webp?sign=67cb4cd559c8bc84c3e6e8d600209650&t=1699424232',
      firstTitleText: '动态大事记',
      secTitleBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/ourthirtysectitbg.webp?sign=5af7e0f45a5f4eb31d5751200a0b56f0&t=1699430845',
      secText: '中控历程：从跟跑到并跑、领跑',
      content: [{
          

          midText: [{
              text: '自主自强，以中小市场为起点，星火燎原'
            },
            
          ],
          smallText: [{
              dot: '●',
              dotColor: '#e507fe',
              text: '1993年，成功自主研发第一台1:1热冗余DCS（JX-100）'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '1994年，推出第一代无纸记录仪（JL-20A）'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '1997年，JX-100荣获国家科技进步三等奖'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '1998年，在国内开始规模推广APC软件'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '1998年，首次进入公路交通行业，中标大溪岭-湖雾岭项目'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2001年，“现场总线控制系统”荣获国家科技进步二等奖'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2002年，被认定为国家火炬计划重点高新技术企业'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2003年，搬入中控科技园'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2005年，成功实施国内首条双向绿波带奠定在城市交通领域的技术优势'
            },
          ]

        }, {
          
          separatePic: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/ourthirtyseparatepic.webp?sign=6e097fb68974b6d47c1226b7d1f6ffb9&t=1699431229',
          
          midText: [{
              text: '进军高端市场，打造国际标准，产品谱系不断拓展'
            },
            
          ],
          smallText: [{
              dot: '●',
              dotColor: '#e507fe',
              text: '2007年，正式发布面向大中装置的大规模联合控制系统ECS-700，并成功中标中石化武汉石化“500万吨/年炼油改造系统项目”，首次打破国外公司在核心装置上的垄断'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2008年，参与奥运“水立方”自动控制项目建设'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2009年，新一代控制系统高性能现场总线—EPA荣获国家技术发明二等奖，是中国第一个被国际认可的工业自动化标准'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2010年，“中控以标准国际化为核心的自动化技术创新工程”荣获国家科技进步二等奖'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2010年，提出“e城市·易生活”理念'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2012年，“炼油化工重大工程自动化控制与优化一体化系统关键技术研究”荣获国家科技进步二等奖'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2012年，荣获“国家技术创新示范企业”称号'
            },
            
          ]

        },
        {
          
          separatePic: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/ourthirtyseparatepic.webp?sign=6e097fb68974b6d47c1226b7d1f6ffb9&t=1699431229',
          
          midText: [{
              text: '聚焦智能制造， 拓展智慧城市，引领商业模式转型'
            },
            
          ],
          smallText: [{
              dot: '●',
              dotColor: '#e507fe',
              text: '2014-2016年，中标中天合创鄂尔多斯煤炭深加工示范项目、国家能源集团宁煤公司百万吨级乙烯项目、东北制药大宗原料药等智能制造项目'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2015年，TCS-900安全控制系统获安全完整性SIL3等级认证'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2015年，连续突破多套千万吨级大型炼油装置项目'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2016年，中控信息大厦、中控产业园正式投入使用'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2016年，承担杭州G20峰会交通保障指挥平台建设和开幕式演出舞台控制系统'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2016年，自主研发大型轨道交通综合监控系统软件MetroView实现首台套应用，打破国外垄断'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2016-2018，完成宁煤公司百万吨级乙烯项目、九江石化、东北制药等一批国家级智能制造项目'
            },
          ]

        },
        {
          separatePic: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/ourthirtyseparatepic.webp?sign=6e097fb68974b6d47c1226b7d1f6ffb9&t=1699431229',
          midText: [{
              text: '加速“二次创业”，推出“烈火计划”，打造更加规范化、现代化、国际化的新中控'
            },
            
          ],
          smallText: [{
              dot: '●',
              dotColor: '#e507fe',
              text: '2017年，参建杭州城市大脑项目'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2017年～2023年，武汉轨道交通机场线、荆门第一人民医院南城区医院、杭州大毛坞—仁和大道供水管道工程获国家优质工程奖'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2017年，发布具有我国自主知识产权的工业操作系统supOS，是国内首个拥有自主知识产权的工业操作系统'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2019年，发布PLANTMATE品牌，打造“5S店+S2B平台”一站式工业服务新模式'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2020年，中控技术在上海证券交易所科创板成功上市'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2020年至今，中控技术产品进入沙特阿美、巴斯夫及壳牌、埃克森美孚等跨国巨头企业，助力国际高端客户数字化转型'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2021年，重磅推出eCityOS基础设施数智化平台'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2022年，“城轨智能管控一体化软硬件关键技术及应用”获浙江省科学技术进步奖二等奖'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2022年，重磅推出OMC系统，并提出“135客户价值创新模式”，全面引领流程工业企业向智能化迈进'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2022年，中控信息建立“双5T战略方针 + 双业务驱动2.0”'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2023年，中控技术GDR在瑞交所成功发行上市，全球化战略进入全新阶段'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2023年，海外首家5S店落地沙特'
            },
            {
              dot: '●',
              dotColor: '#e507fe',
              text: '2023年，推出 “1+2+N”智能工厂新架构，助力流程工业企业实现生产过程自动化（PA）和企业运营自动化（BA）'
            },
          ]

        },

      ],

    },
   
],

    
    processContent: [{
        type: 'background',
        midSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG268.jpg?sign=be0bfc5a7a6040ba15554cd40989b8d5&t=1697444855',
        // topTitleText: '大会背景',
        // conferenceBackgroundContent: [{
        //     text: '1993年，中控怀抱着工业强国的梦想，迈上了自主研发之路，创业初期，中控自主创新、成长淬炼，打造以控制系统为核心的产品体系;后又进军高端，打破技术垄断，持续精耕，引领智能制造;而今中控创新服务模式，开启国际化新征程，以科技为高台，踏梦前行。'
        //   },
        //   {
        //     text: '三十年，是几代中控人成长的厚重积淀，中控始终坚信一个信念，要做一家有使命感的企业，在中国发展进程中留下深深的印迹。'
        //   }
        // ],
        timeInfoRemarksContainer: [{
            src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/timepositioninfobg.webp?sign=cf6cb766b70fc22cd196336964513630&t=1699419186',
            text: '大会时间：2023/11/23（ 14: 00-17: 00 ）'
          },
          {
            src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/timepositioninfobg.webp?sign=cf6cb766b70fc22cd196336964513630&t=1699419186',
            text: '大会地址：杭州奥体中心网球中心（ 小莲花 ）'
          }
        ]




      },
      {
        type: 'performanceList',
        bgSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/introoerformancebg.webp?sign=f862cb034c36f3f23d5d083dcf495050&t=1699420693',
        midSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG276.jpg?sign=0e24468b7d916575181a62f213b9ef2a&t=1697456504',
        topTitleText: '节目单',
        data: [{

            idAndProgram: [{
              src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9A%96%E5%9C%BA.jpg?sign=c8ae5cedbf7c408f97a64e67cbf02699&t=1698812165',
              performanceName: '我们的三十年系列视频',

            }]
          },
          {
            titleSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG275.jpg?sign=eb8f7853fb549196eda3cef8c1bc431f&t=1697450099',
            titleText: '篇章一 跨越山海',
            idAndProgram: [{
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E8%8A%82%E7%9B%AE%E5%8D%9501.jpg?sign=78f12c5d4a0674fc994d92d8d3fd004e&t=1698745905',
                performanceName: '开场舞蹈《勇立潮头》',
                
              },
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG278.jpg?sign=54125653a03920d5b8444d4516efa6ff&t=1698744822',
                performanceName: '庆典致辞',

              },
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG279.jpg?sign=b7ce714e7a0708c7b4da3c47412107eb&t=16974535673',
                performanceName: '音诗画《跨越山海》',
              //   performer: [{
              //     text: '俞海斌 方芳 袁剑蓉 张伟'
              //   },
                
              // ]

              },
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG280.jpg?sign=18028aadd168518839a39510623af5a6&t=1697453623',
                performanceName: '情景舞蹈《一代一代中控人》',
                // performer: [{
                //     text: '中控集团员工'
                //   },

                // ]

              },
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG281.jpg?sign=877fe37c1edbba54291c8c078899d021&t=1697453655',
                performanceName: '《夜空中最亮的星》',
                // performer: [{
                //     text: '中控集团员工'
                //   },

                // ]

              },
              
            ]
          },
          {
            titleSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG284.jpg?sign=d2f18e34adab3c328005f871bfadc39a&t=1697453932',
            titleText: '篇章二 同揽云川',
            idAndProgram: [
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/jiemu06.jpg?sign=72535d0c0cb4350b369f22a2f53086d4&t=1699881751',
                performanceName: '《梦想同行》',
                

              },
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E8%8A%82%E7%9B%AE%E5%8D%9507.jpg?sign=292d1e59d15f184d28c0fc7b2939349c&t=1698745717',
                performanceName: '小品《时间为证》',
                // performer: [{
                //     text: '景利超 徐翔 叶无畏 张鑫伟'
                //   },


                // ]
              },
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG285.jpg?sign=e70cc41cacdad60eb20be89b8c16d922&t=1697453992',
                performanceName: '《同行三十载》',
                

              },
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG286.jpg?sign=0ed0c330fa067f1fcd072930a6f2a86e&t=1697454045',
                performanceName: '歌舞《烈火》',
              //   performer: [{
              //     text: '陈阜 陈耀清 戴希伦 宋罡 孙中立 徐子睿 杨豫鹏 赵泽亮'
              //   },


              // ]

              },
              
            ]
          },
          {
            titleSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG289.jpg?sign=4e2458cae854bae12646ab4fbcc68a80&t=1697454459',
            titleText: '篇章三 踏梦星河',
            idAndProgram: [
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/jiemu10.jpg?sign=4d661eb1b9b807a42544a3e111763d29&t=1699881825',
                performanceName: '音诗画《未来，你好》',
              //   performer: [{
              //     text: '刘美辰 刘洋 罗璇 张惠泽等'
              //   },
                
              // ]
              },
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/jiemu11.jpg?sign=2fd229a3e1c40a2851720c0345537f4d&t=1699881839',
                performanceName: '光影秀《Dream》',
                // performer: [{
                //     text: '中控集团员工'
                //   },

                // ]

              },

              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG293.jpg?sign=84ac71bd4da9dccdb3e6b066f23fdbc7&t=1697454478',
                performanceName: '《主题报告》',
                // performer: [{
                //     text: '中控集团创始人 褚健'
                //   },


                // ]
              },
              {
                src: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG294.jpg?sign=9ce30d8a4389f6a833cb03ace7fbc7af&t=1697454515',
                performanceName: '歌曲串烧《逐光而行》',
                // performer: [{
                //     text: '中控集团员工'
                //   },


                // ]

              },
              
              
            ]
          },
        ]


      }
    ]
  },

  showProcess() {
    wx.vibrateShort()
    this.setData({
      process: true,
      thirty: false
    })
  },
  showThirty() {
    wx.vibrateShort()
    this.setData({
      process: false,
      thirty: true
    })
  },
  toTheTop() {
    wx.vibrateShort()
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  onPageScroll: function (e) {
    if (e.scrollTop > this.data.topBgHeight) {
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
