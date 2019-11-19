Page({
  goNews: function(){
    wx.switchTab({
      url: '../news/news'
    })
  },
  footer: function(){
    wx.navigateTo({
      url: '../flex/flex'
    })
  }
})