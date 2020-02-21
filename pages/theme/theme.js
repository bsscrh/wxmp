import { Theme } from 'theme-model.js';
var theme = new Theme(); //实例化  主题列表对象
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    this.data.titleName = option.name;
    this.data.id = option.id;
    wx.setNavigationBarTitle({
      title: option.name
    });
    this._loadData();
    
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;
    /*获取单品列表信息*/
    theme.getProductorData(this.data.id, (data) => {
      that.setData({
        themeInfo: data,
        loadingHidden: true
      });
      callback && callback();
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})