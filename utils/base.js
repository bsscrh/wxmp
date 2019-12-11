import { Config } from 'config.js';
class Base{
  constructor() {
    this.baseRestUrl = Config.restUrl;
    this.onPay = Config.onPay;
  }

  request(params){
    var url = this.baseRestUrl + params.url;
    if (!params.type) {
      params.type = 'GET';
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: function (res) {
        params.sCallback && params.sCallback(res.data);//这里的res.data参数是把返回结果传出去
      },
      fail:function(error){
        console.log('error:',error);
      }
    })
  }
}
export { Base };