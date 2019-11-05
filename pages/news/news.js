var newsData = require("../data/newsdata.js");
const app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay:true,
    interval: 2000,
    circular:true,
    newsData: "",
    openid: "",
    newsid:""
  },
  onLoad:function(){
    var that = this;
    wx.request({
      url: 'http://zerg.com/api/v1/wxnews',
      success(res) {
        console.log(res.data);
        that.setData({
          // 内部导入（见第一行）newsData:newsData.newsData
          newsData: res.data
        })
      }
    });
    
  },
  goNewsDetail:function(event){
    var newsid = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'news-detail/news-detail?newsid='+newsid,
    })
  },
  sc:function(event){
    var openid = app.globalData.openid
    var newsid = event.currentTarget.dataset.newsid;
    var that =this;
    wx.request({
      url: 'http://zerg.com/api/v1/dosc/' + openid+'/'+newsid,
      success(res) {
        console.log(res.data.newsData);
        that.setData({
              newsData : res.data.newsData
            })
      }
    });
  }
})