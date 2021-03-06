var newsData = require("../data/newsdata.js");
const app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    circular: true,
    newsData: "",
    openid: "",
    newsid: "",
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'http://zerg.com/api/v1/wxnews',
      success(res) {
        that.setData({
          // 内部导入（见第一行）newsData:newsData.newsData
          newsData: res.data
        }),
        console.log(res.data)
      }
    });

  },
  goNewsDetail: function(event) {
    var newsid = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'news-detail/news-detail?newsid=' + newsid,
    })
  },
  sc: function(event) {
    var openid = app.globalData.openid
    var newsid = event.currentTarget.dataset.newsid;
    var index = event.currentTarget.dataset.index
    var that = this;
    wx.request({
      url: 'http://zerg.com/api/v1/dosc/' + openid + '/' + newsid,
      success(res) {
        var newsData1 = that.data.newsData;
        var status = res.data.status;
        if (res.data.status == "cancel_sc") {
          newsData1[index].sc -= 1;
        } else {
          newsData1[index].sc += 1;
        }
        wx.showToast({
          title: status == "cancel_sc" ? '取消收藏' : '收藏成功',
          icon: 'success',
          duration: 2000,
          mask: true
        })
        that.setData({
          newsData: newsData1
        })
      }
    });
  },
  fx: function() {
    var itemList = ['A', 'B', 'C'];
    wx.showActionSheet({
      itemList: itemList,
      success(res) {
        console.log(itemList[res.tapIndex])
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/news/news-detail/news-detail'
    }
  }
})