/**
 * api接口抽象方法
 */
let serverRoot = '//interface.m.yihaodian.com/centralmobile/mobileservice/saleTop/';

class Server {

  //获取类目接口
  static getPmsRankCategories(data, callback) {
    FetchJsonp({
      type: 'GET',
      url: serverRoot+'getPmsRankCategories.action',
      dataType: 'json',
      timeout: 300000,
      data: data,
      xhrFields: {
        withCredentials: true
      },
      success: function (json) {
        callback(json);
      },
      error: function (exp) {
        callback({});
      }
    })
  }
  //获取类目商品接口
  static getPmsRankProducts(data, callback) {
    FetchJsonp({
      type: 'GET',
      url: serverRoot+'getPmsRankProducts.action',
      dataType: 'json',
      timeout: 300000,
      data: data,
      xhrFields: {
        withCredentials: true
      },
      success: function (json) {
        callback(json);
      },
      error: function (exp) {
        callback({});
      }
    })
  }





}

export default Server
