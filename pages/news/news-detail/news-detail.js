Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicflag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newsid = options.newsid;
    var that = this;
    wx.request({
      url: 'http://zerg.com/api/v1/wxnews/' + newsid,
      success(res){
        that.setData(
          res.data
        )
      }
    })
  },
  playMusic: function(event){
    var musicflag = this.data.musicflag;
    if(musicflag){
      wx.pauseBackgroundAudio();
      this.setData({
        musicflag: false
      })
    }else{
      var that = this;
      wx.playBackgroundAudio({
        dataUrl: this.data.musicUrl,
        title: this.data.musicTitle,
        coverImgUrl: '',
        success(res) {
          console.log("成功", res);
          that.setData({
            musicflag: true
          })
        },
        fail(res) {
          console.log("失败", res)
        }
      })
    }
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
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