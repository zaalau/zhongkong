// pages/intro/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        process: true,
        thirty: false,
        introContainerHeight: '',
        processBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG118.jpg?sign=f8e9d066b941cfa70b10590c76b805b9&t=1697085832',
        thirtyBg: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG265.jpg?sign=e820d62b72acaf71bc73135dc2088d1e&t=1697443470',
        timeLineBg:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG65.jpg?sign=9577bbed221dca1c182861994fb8385e&t=1697020216',
        secTitleBg:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG70.jpg?sign=6f1b761e1a88dc93b6e2de649c5853f1&t=1697023020',
        bigText:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG77.jpg?sign=4cccd99a793741cf1ff22be894c3389e&t=1697023946',
        content:[
            {
                bigText:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG77.jpg?sign=4cccd99a793741cf1ff22be894c3389e&t=1697023946',
                midText:[
                    { text: '自主创新，成长萃炼'},
                    { text: '打造以控制系统为核心的产品体系'}
                ],
                smallText:[
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '成功自主研发第一台1:1热冗余DCS(JX-100)推出第一台无纸记录仪(JL-20A)'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '在国内开始规模推广APC软件'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '“现场总线控制系统”荣获国家科技进步二等奖'
                    },
                ]

            },{
                bigText:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG78.jpg?sign=fd34c4bb54ee11e901a07655c682dc35&t=1697026790',
                midText:[
                    { text: '进军高端，打破技术垄断'},
                    { text: '延伸控制阀、仪表、工业软件业务，不断拓展产品谱系'}
                ],
                smallText:[
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '面向大中装置的大规模联合控制系统ECS-700正式发布，相关研发成果“面向重大工程的联合控制系统的研发及其应用”荣获浙江省科学技术奖一等奖'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '成功中标中石化武汉石化“500万吨/年炼油改造系统项目”,“中国大脑”首次打破国外公司对中国石化核心装置控制系统垄断'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '“新一代控制系统高性能现场总线—EPA”荣获国家技术发明二等奖，是中国第一个被国际认可的工业自动化标'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '“中控以标准国际化为核心的自动化技术创新工程”荣获围家科技进步二等奖'
                    },
                ]

            },
            {
                bigText:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG79.jpg?sign=a14d781185763665aacc396bd110b61a&t=1697026871',
                midText:[
                    { text: '持续精耕，引领智能制造'},
                    { text: '从自动化产品供应商转型为智能制造整体解决方案供应商'}
                ],
                smallText:[
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '“炼油化工重大工程自动化控制与优化一体化系统关键技术研究”荣获国家科技进步二等奖'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '“化工产业联合生产智能管控一体化综合系统”示范项目获得国家发改委、财政部、工信部的立项批复，列入国家智能制造装备发展专项'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '成功中标中天合创鄂尔多斯煤炭深加工示范项目、国家能源集团宁煤公司百万吨级乙烯项目、东北制药国家级智能制造项目'
                    },
                ]

            },
            {   
                bigText:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG80.jpg?sign=0c32fe44c1d79e890890d6f6e80fcc14&t=1697026890',
                
                midText:[
                    { text: '创新商业模式，开启国际化新征程'},
                    { text: '打造“135客户价值创新模式”,实现从工业3.0到工业4.0的跨越'}
                ],
                smallText:[
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '推出“135客户价值创新模式”即一种服务模式“5S店+S28平台”,三大产品技术平台“OMC”“工厂操作系统+工业APP”“APEX”,5T技术'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '打造国际化业务生态圈，产品进入沙特阿美、巴斯夫及壳牌、埃克森美孚等跨国巨头企业，助力国际高端客户数字化转型'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '在上海证券交易所科创板成功上市，股票代码688777;成功发行GDR,在瑞士证券交易所挂牌交易'
                    },
                    {
                        dot: '●',
                        dotColor: '#ffb71b',
                        text: '入股石化盈科、众一伍德、达美盛，全资收购国际高端分析仪器公司Hobre(荷兰)'
                    },
                ]

            },
            
        ],
        mediaContent: [
            {
                textUrl:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG95.jpg?sign=bcdaf32c567dcd4c236fb7cb30b3c00a&t=1697028652',
                vedio:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG98.jpg?sign=963b195401660c96dca2a18f267333bf&t=1697028568',
                width:150
            },
            {
                textUrl:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG93.jpg?sign=5a36c43bd40890aa9339db5aba905223&t=1697028675',
                vedio:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG96.jpg?sign=279274d9c6a8abaac190d2032d423a93&t=1697028642',
                width:180
            },
            {
                textUrl:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG94.jpg?sign=3c8efdf421b547a3ceec48e8bf389f06&t=1697028662',
                vedio:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG97.jpg?sign=4948669c370edcc042cee9fbaf88b82e&t=1697028626',
                width:90
            },
        ],
        processContent: [
            {
                type:'background',
                midSrc:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG268.jpg?sign=be0bfc5a7a6040ba15554cd40989b8d5&t=1697444855',
                topTitleText:'大会背景',
                conferenceBackgroundContent:[
                    {
                        text:'1993年，中控怀抱着工业强国的梦想，迈上了自主研发之路，创业初期，中控自主创新、成长淬炼，打造以控制系统为核心的产品体系;后又进军高端，打破技术垄断，持续精耕，引领智能制造;而今中控创新服务模式，开启国际化新征程，以科技为高台，踏梦前行。'
                    },
                    {
                        text:'三十年，是几代中控人成长的厚重积淀，中控始终坚信一个信念，要做一家有使命感的企业，在中国发展进程中留下深深的印迹。'
                    }
                ],
                timeInfoRemarksContainer:[
                    {
                        src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG271.jpg?sign=eb12a89d99f610763155448c04304154&t=1697447643',
                        text:'大会时间：2023/11/23（ 14: 00-17: 00 ）'
                    },
                    {
                        src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG271.jpg?sign=eb12a89d99f610763155448c04304154&t=1697447643',
                        text:'大会地址：杭州奥体中心网球中心（ 小莲花 ）'
                    }
                ]

                    
                

            },
            {
                type:'performanceList',
                bgSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG274.jpg?sign=91361d4d0fc2cd43c2bcb0c6ec4972a6&t=1697448382',
                midSrc: 'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG276.jpg?sign=0e24468b7d916575181a62f213b9ef2a&t=1697456504',
                topTitleText:'节目单',
                data:[
                    {
                        
                        idAndProgram:[
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG277.jpg?sign=b1e6812b08130a420b031aa3468dbd0c&t=1697453319',
                                performanceName:'《中控三十周年纪录片》',
                                
                            }
                        ]
                    },
                    {
                        titleSrc:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG275.jpg?sign=eb8f7853fb549196eda3cef8c1bc431f&t=1697450099',
                        titleText:'篇章一 跨越山海',
                        idAndProgram:[
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG297.jpg?sign=84fb11ca7bf313d1b8f5ad45ec9dffeb&t=1697451188',
                                performanceName:'引子 ·《应运而生》',
                                performer:[
                                    {
                                        text:'俞海斌 方芳 刘美辰 刘洋 张惠泽 罗璇'
                                    },
                                    {
                                        text:'上海青年交响乐团(待定)'
                                    }
                                ]
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG279.jpg?sign=b7ce714e7a0708c7b4da3c47412107eb&t=1697453567',
                                performanceName:'领导致辞',
                                
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG280.jpg?sign=18028aadd168518839a39510623af5a6&t=1697453623',
                                performanceName:'《十大里程碑事件》',
                                
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG281.jpg?sign=877fe37c1edbba54291c8c078899d021&t=1697453655',
                                performanceName:'《梦想同行》',
                                performer:[
                                    {
                                        text:'xxx舞蹈团 中控集团员工'
                                    },
                                    
                                ]
                                
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG283.jpg?sign=e12219493a391f4ae36c158829417527&t=1697453725',
                                performanceName:'《一代一代中控人》',
                                performer:[
                                    {
                                        text:'xxx xxx xxx等中控集团员工'
                                    },
                                    
                                ]
                                
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG282.jpg?sign=e0b13946a55c48455e73178fbb08498a&t=1697453762',
                                performanceName:'《夜空中最亮的星》',
                                performer:[
                                    {
                                        text:'xxx xxx xxx等中控集团员工'
                                    },
                                    
                                ]
                                
                            },
                        ]
                    },
                    {
                        titleSrc:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG284.jpg?sign=d2f18e34adab3c328005f871bfadc39a&t=1697453932',
                        titleText:'篇章二 同揽云川',
                        idAndProgram:[
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG285.jpg?sign=e70cc41cacdad60eb20be89b8c16d922&t=1697453992',
                                performanceName:'引子·《同揽云川》',
                                performer:[
                                    {
                                        text:'xxx舞蹈团 中控集团员工'
                                    },
                                   
                                    
                                ]
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG286.jpg?sign=0ed0c330fa067f1fcd072930a6f2a86e&t=1697454045',
                                performanceName:'《Never Say No》',
                                performer:[
                                    {
                                        text:'xxx xxx xxx等中控集团员工'
                                    },
                                   
                                    
                                ]
                                
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG287.jpg?sign=a524bb704af2a7b4affbd4b95d037dd6&t=1697454090',
                                performanceName:'《同行三十载》',
                                
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG288.jpg?sign=91703052355d65538702003cef1d1401&t=1697454129',
                                performanceName:'《烈火》',
                                performer:[
                                    {
                                        text:'徐子睿 宋罡 陈耀清 孙中立 赵泽亮 杨豫鹏 戴希伦 陈阜'
                                    },
                                    
                                ]
                                
                            },
                            
                        ]
                    },
                    {
                        titleSrc:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG289.jpg?sign=4e2458cae854bae12646ab4fbcc68a80&t=1697454459',
                        titleText:'篇章三 踏梦星河',
                        idAndProgram:[
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG293.jpg?sign=84ac71bd4da9dccdb3e6b066f23fdbc7&t=1697454478',
                                performanceName:'引子·《未来，你好》',
                                performer:[
                                    {
                                        text:'xxx舞蹈团 中控集团员工'
                                    },
                                   
                                    
                                ]
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG294.jpg?sign=9ce30d8a4389f6a833cb03ace7fbc7af&t=1697454515',
                                performanceName:'《Dream》',
                                performer:[
                                    {
                                        text:'xxx xxx xxx等中控集团员工'
                                    },
                                   
                                    
                                ]
                                
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG290.jpg?sign=195d447a289f62fe10dbdeda0f5d11da&t=1697454545',
                                performanceName:'创始人发言',
                                performer:[
                                    {
                                        text:'中控创始人 褚健'
                                    },
                                    
                                ]
                                
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG291.jpg?sign=5475e4258c2847df1df2d44302719bbe&t=1697454598',
                                performanceName:'《致未来》',
                                
                                
                            },
                            {
                                src:'https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/WechatIMG292.jpg?sign=4049c7e34a333df80d9af8d8b1c2a4e5&t=1697454632',
                                performanceName:'大合唱',
                                performer:[
                                    {
                                        text:'中控集团员工'
                                    },
                                    
                                ]
                                
                            },
                        ]
                    },
                ]


            }
        ]
    },
    
    showProcess() {
        this.setData({
            process: true,
            thirty: false
        })
    },
    showThirty() {
        this.setData({
            process: false,
            thirty: true
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
                topBgHeight: 694*res.windowWidth/750
              })
            }
          })
          
          wx.loadFontFace({
            family: '熬夜',
            source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/YEZIGONGCHANGAOYEHEI-2.TTF?sign=9ae2d7df8b1fb9c38e05debf464386a3&t=1697024267")',
            scopes: ['webview', 'native'],//由于canvas是原生组件，所以需要加上native，否则无效
          
            success: function () {
            }
          })
          wx.loadFontFace({
            family: '粗',
            source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E7%B2%97.OTF?sign=1994f3cc99f15e650ebac2807088af58&t=1697025919")',
            scopes: ['webview', 'native'],//由于canvas是原生组件，所以需要加上native，否则无效
          
            success: function () {
            }
          })
          
          wx.loadFontFace({
            family: '细',
            source: 'url("https://7a68-zhongkong-0gr2bnjw8020e857-1321404713.tcb.qcloud.la/%E4%B8%8A.OTF?sign=0d441ceb51bf2f2d0c05ea2eaba72de5&t=1697026063")',
            scopes: ['webview', 'native'],//由于canvas是原生组件，所以需要加上native，否则无效
          
            success: function () {
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