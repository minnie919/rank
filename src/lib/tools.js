import H5ToNative from './h5tonative'
define([], function () {
  var exports = {};
  exports.getParamFormUrl = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  };
  exports.isWeixin = function () {
    var ua = navigator.userAgent.toLowerCase();
    if ((ua.match(/MicroMessenger/i) == "micromessenger")) {
      return true;
    } else {
      return false;
    }
  };

  exports.isLogin = function () {
    let isH5 = H5ToNative.yhdplatform.isother();
    if (isH5) {
      if (!this.getCookie('uname') || this.getCookie('uanme') == 'null') {
        return false;
      } else {
        return true;
      }
    } else {
      if (H5ToNative.getUserToken()) {
        return true;
      } else {
        return false;
      }
    }
  }

  exports.isGetprovince = function () {
    if (!this.getCookie('provinceId')) {
      return false;
    } else {
      return true;
    }
  };

  exports.goLogin = function () {
    let isH5 = H5ToNative.yhdplatform.isother();

    if (isH5) {
      window.location.href = "https://passport.yhd.com/m/login_input.do?returnUrl=" + encodeURIComponent(window.location.href);
    } else {
      H5ToNative.goToNative("yhd://login/", '{"from":"h5"}');
    }
  };


  exports.getCookie = function (name) {
    return document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)")) == null ? null : decodeURIComponent(RegExp.$2);
  };
  exports.setCookie = function (name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString();
  };

  exports.checkMobile = function (val) {
    var pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    if (pattern.test(val)) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * 获取webp图
   * @param url
   * @returns {*|void|string|XML}
   */
  exports.miniImg = function (url) {
    url && (url = exports.supportHTTPS(url));
    if (exports.supportWebp()) {
      return url && url.replace(/\.(jpg|png)$/, '.webp');
    }
    return url;
  };
  /**
   * 检测是否支持webp
   * @returns {boolean}
   */
  exports.supportWebp = function () {
    if (typeof localStorage === 'undefined') {
      return false;
    }
    let b = localStorage.getItem('webp');
    if (b) {
      return true;
    }
    let a = document.createElement('canvas');
    if (a.getContext && a.getContext('2d')) {
      let c = (a.toDataURL('image/webp').indexOf('data:image/webp') == 0);
      if (c) {
        localStorage.setItem('webp', true)
      }
      return c;
    } else {
      return false;
    }
  };

  exports.supportHTTPS = function (url) {
    var proto = ('https:' === document.location.protocol ? 'https:' : 'http:');
    var e = /^(http:|https:)*\/\/(.+)./i;
    if (e.test(url)) {
      return url.replace(/http:/g, proto);
    } else {
      return url;
    }

  };

  /**
   *  getValue(list,'a.b');
   * @param obj 需要取值的对象
   * @param exp  取值表达式
   */
  exports.getValue = function (obj, exp) {
    if (exports.isEmpty(obj)) {
      return undefined;
    }
    if (exports.isEmpty(exp)) {
      return undefined;
    }
    if (exports.type(exp) !== 'string') {
      return undefined;
    }
    var exps = exp.split('.');
    var passedObj = {};
    var passed = exps.every(function (t, num) {
      if (num === 0) {
        passedObj = obj[t];
        if (exports.isEmpty(obj[t])) {
          return false;
        }
      } else if (num < len) {
        passedObj = passedObj[t];
        if (exports.isEmpty(obj[t])) {
          return false;
        }
      }
      return true;
    });
    if (passed) {
      var len = exps.length;
      var returnObj = {};
      exps.forEach(function (t, num) {
        if (num === 0) {
          returnObj = obj[t];
        } else if (num < len) {
          returnObj = returnObj[t];
        }
      });
      return returnObj;
    } else {
      return undefined;
    }
  }

  exports.isEmpty = function (str) {
    if (exports.type(str) === 'object') {
      if (str != null && Object.keys(str).length > 0) {
        return false;
      }
    } else if (exports.type(str) !== 'undefined' && exports.type(str) !== 'error' && exports.type(str) !== 'null') {
      if(str){
        str = str.toString();
      } else {
        return false;
      }

      if (str.length > 0) {
        return false;
      }
    }
    return true;
  };


  exports.type = function (o) {
    var TYPES = {
      'undefined': 'undefined',
      'number': 'number',
      'boolean': 'boolean',
      'string': 'string',
      '[object String]': 'string',
      '[object Number]': 'number',
      '[object Function]': 'function',
      '[object RegExp]': 'regexp',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object Error]': 'error'
    };
    var TOSTRING = Object.prototype.toString;
    return TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');
  };
  exports.isApp = function () {
    return !H5ToNative.yhdplatform.isother();
  };

  exports.goHref = function (href, urlType) {
    if (href) {
      if (urlType === 1) {
        href && (href = exports.supportHTTPS(href));
        window.location.href = href;
      } else {
        H5ToNative.goToNative(href);
      }
    }
  };

  exports.addTocart=function(pmId,productId,promotionId,merchantId,needpoint,productType,dom,callback){
    var b = {
      pmId: pmId,
      productId: productId,
      promotionId: promotionId,
      merchantId: merchantId,
      needpoint: needpoint,
      productType: productType,
      num: 1,
      dom:dom,
      tag:dom.tagName
    };
    if ($.trim(promotionId) != "" && promotionId != "null" && promotionId != "0") {
      b.opType = "3";
      var w = {};
      w[pmId] = 1;
      b.pmIdStr = w
    }

    window.cart.addToCart(b,callback);
  };

  return exports;
});
