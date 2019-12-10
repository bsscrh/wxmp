Page({
  goNews: function(){
    wx.switchTab({
      url: '../news/news'
    })
  },
  zhifu:function(){
    wx.login({
      //获取code
      success: function (res) {
        var code = res.code; //返回code
        // console.log(code);die;
        var appId = 'wxe7c03a39576971ee';
        var secret = 'f103cbd478a8d3b64b7d3ba02d9d399f';
        wx.request({
          url: 'http://zerg.com/api/v1/token/user',
          method: 'POST',
          data: {
            code: code
          },
          success: function (res) {
            var token = res.data.token;
            console.log("token:",token)
            wx.setStorageSync('token', res.data.token);
            wx.request({
              url: 'http://zerg.com/api/v1/pay/pre_order',
              method: 'POST',
              header:{
                token: token
              },
              data: {
                id: 1
              },
              success: function (res) {
                console.log(res);
                var preData = res.data;
                wx.requestPayment({
                  timeStamp: preData.timeStamp.toString(),
                  nonceStr: preData.nonceStr,
                  package: preData.package,
                  signType: preData.signType,
                  paySign: preData.paySign,
                  success:function(res){
                    console.log(res.data)
                  },
                  fail:function(error){
                    console.log(error)
                  }
                })
              }
            })
          }
        })
    
      }
    });
  }
})