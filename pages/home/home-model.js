class Home {
  getBannerData(id,callBack) {
    wx.request({
      url: 'http://zerg.com/api/v1/banner/'+id,
      method:'GET',
      success:function(res){
        callBack(res);
      }
    })
  }
}

export { Home };