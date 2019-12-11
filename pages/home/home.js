import { Home } from 'home-model.js';
var home = new Home();
Page({
  data: {
    
  },
  onLoad: function (options) {
    this._loadData();
    
  },
  _loadData: function () {
    var id = 1;
    // 获得bannar信息
    // 这里的参数res是home.getBannerData()的success的返回结果
    var bannerData = home.getBannerData(id,(res)=>{
      this.setData({
        bannerData: res.items
      })
      console.log(this.data.bannerData)
    });  
  }
})