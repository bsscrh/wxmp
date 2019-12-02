App({
  globalData:{
    openid:""
  },
  onLaunch(options) {
    var that = this;
    wx.login({
      //获取code
      success: function (res) {
        var code = res.code; //返回code
        // console.log(code);die;
        var appId = 'wxe7c03a39576971ee';
        var secret = 'f103cbd478a8d3b64b7d3ba02d9d399f';

        // wx.request({
        //   url: 'http://zerg.com/api/v1/token/user',
        //   method: 'POST',
        //   data:{
        //     code: code
        //   },
        //   success:function(res){
        //     console.log(res)
        //     wx.setStorageSync('token', res.data.token)
        //   }
        // })

        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function (res) {
            var openid = res.data.openid //返回openid
            
            that.globalData.openid = openid
          }
        })
      }
    });
  }
})