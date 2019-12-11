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
        //这里的sCallback接收的前面是传过来的整个函数，然后把wx.request处理完的res.data返回结果传出去
        params.sCallback && params.sCallback(res.data);
      },
      fail:function(error){
        console.log('error:',error);
      }
    })
  }
}
export { Base };