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
    // 这里的参数res是home.getBannerData(id, this.callBack)的success返回的res
    var bannerData = home.getBannerData(id,(res)=>{
      this.setData({
        bannerData: res.data.items
      })
      console.log(this.data.bannerData)
    });  
  }
})