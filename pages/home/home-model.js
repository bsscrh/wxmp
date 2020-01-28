import { Base } from '../../utils/base.js';
//继承Base就不需要实例化Base，不继承就得实例化
class Home extends Base {

  /*banner图片信息*/
  getBannerData(id,callBack) {
    var params = {
      url: '/banner/'+id,
      sCallback: callBack
    };
    this.request(params);
  }

  /*首页主题*/
  getThemeData(callback) {
    var param = {
      url: '/theme?ids=1,2,3',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
}

export { Home };