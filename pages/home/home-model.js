import { Base } from '../../utils/base.js';
//继承Base就不需要实例化Base，不继承就得实例化
class Home extends Base {
  getBannerData(id,callBack) {
    var params = {
      url: '/banner/'+id,
      sCallback: callBack
    };
    this.request(params);
  }
}

export { Home };