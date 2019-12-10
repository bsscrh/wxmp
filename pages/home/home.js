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
    var data = home.getBannerData(id);
  }
})