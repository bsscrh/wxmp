var newsData = require("../data/newsdata.js");
Page({
  data: {
    indicatorDots: true,
    autoplay:true,
    interval: 2000,
    circular:true,
    newsData: ""
  },
  onLoad:function(){
    var that = this;
    wx.request({
      url: 'http://zerg.com/api/v1/wxnews',
      success(res) {
        console.log(res)
        that.setData({
          // 内部导入（见第一行）newsData:newsData.newsData
          newsData: res.data
        })
      }
    })
    
  }
})