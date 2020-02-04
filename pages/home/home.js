import { Home } from 'home-model.js';
var home = new Home();
Page({
  data: {
    
  },
  onLoad: function (options) {
    this._loadData();
    
  },
  _loadData: function (callback) {
    var id = 1;
    var that = this;
    // 获取bannar信息,这里是把这个函数传过去接收值
    // 这里的参数res是home.getBannerData()的success的返回结果
    home.getBannerData(id,(res)=>{
      that.setData({
        bannerData: res.items
      })
      console.log(this.data.bannerData)
    });

    /*获取主题信息*/
    home.getThemeData((data) => {
      that.setData({
        themeArr: data,
        loadingHidden: true
      });
      // console.log(this.data.themeArr)
    });

    /*获取单品信息*/
    home.getProductorData((data) => {
      that.setData({
        productsArr: data
      });
      // callback && callback();
    });
  },
  /*跳转到商品详情*/
  onProductsItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },
  /*跳转到主题列表*/
  onThemesItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../theme/theme?id=' + id + '&name=' + name
    })
  },
})