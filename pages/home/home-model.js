class Home {
  getBannerData(id) {
    wx.request({
      url: 'http://zerg.com/api/v1/banner/'+id,
      method:'GET',
      success:function(res){
        console.log(res);
      }
    })
  }
}

export { Home };