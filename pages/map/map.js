// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"",
    longitude:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
        that.setData({
          latitude: latitude,
          longitude: longitude
        });
      }
    })
  }
})