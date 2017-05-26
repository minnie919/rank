var h5tonative =
{
    urlList: {
        apphome: "yhd://home/",
        appcart: "yhd://cart/",
        appgroupone: "yhd://groupon/"
    },
    functionlist: {
        shake: "yhdiosfun://shake/",
        playAudio: "yhdiosfun://playAudio/",
        addCart: "yhdiosfun://addCart/",
        share: "yhdiosfun://share/",
        goback: "yhdiosfun://back/",
        unionlogin: "yhdiosfun://unionloginback/",
        buoyCart: "yhdiosfun://buoyCart/",
        getRemoteData: "yhdiosfun://getRemoteData/",
        saveH5Data: "yhdiosfun://saveH5Data/",
        getH5Data: "yhdiosfun://getH5Data/",
        h5Init: "yhdiosfun://h5Init/",
        h5Refresh: "yhdiosfun://h5Refresh/",
        hideTab: "yhdiosfun://hideTab/",
        setTabBtn: "yhdiosfun://setTabBtn/",
        setCanReload: "yhdiosfun://setCanReload/",
        setHomeBtn: "yhdiosfun://setHomeBtn/",
        showBackBtn: "yhdiosfun://showBackBtn/",
        showShareButton: "yhdiosfun://showShareButton/",
        showSiftBtn: "yhdiosfun://showSiftBtn/",
        setNavTitle: "yhdiosfun://setNavTitle",
        showPageButtons: "yhdiosfun://showPageButtons",
        showMyIconBtn: "yhdiosfun://showMyIconBtn",
        cutHandRemind: "yhdiosfun://cutHandRemind"
    },

    iOSCall:function (url) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', url);
        document.documentElement.appendChild(iframe);
        iframe.parentNode.removeChild(iframe);
        iframe = null;
    },

    getAllCookie: function () {
        return unescape(document.cookie);
    },
    getCookie: function (sMainName, sSubName) {
        var re = new RegExp((sSubName ? sMainName + "=(?:.*?&)*?" + sSubName + "=([^&;$]*)" : sMainName + "=([^;$]*)"), "i");
        return re.test(unescape(document.cookie)) ? RegExp["$1"] : "";
    },
    getUserAgent: function () {
        return navigator.userAgent;
    },
    yhdplatform: {
        isandroid: function () {
            return h5tonative.getUserAgent().indexOf("yhdandroid") > 0;
        },
        isios: function () {
            return h5tonative.getUserAgent().indexOf("yhdios") > 0;
        },
        isother: function () {
            return h5tonative.getUserAgent().indexOf("yhdandroid") < 0 && h5tonative.getUserAgent().indexOf("yhdios") < 0;
        }
    },
    getClientInfo: function () {
        return h5tonative.getCookie("clientinfo", "");
    },
    getUserToken: function () {
        return h5tonative.getCookie("usertoken", "");
    },
    getProvinceid: function () {
        return h5tonative.getCookie("provinceid", "");
    },
    getFrom: function () {
        return h5tonative.getCookie("from", "");
    },
    getSessionid: function () {
        return h5tonative.getCookie("sessionid", "");
    },
    isWireless2: function () {
        if (h5tonative.getCookie("frameworkver", "") != "") {
            return true;
        }
        return false;
    },
    //url:native模块url地址,必须以/结尾,如:yhd://home/,yhd://cart/
    goToNative: function (url, param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.gotToNative && window.yhd.gotToNative(url, param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(url + "?body=" + param);
        }
    },
    playAudio: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.playAudio && window.yhd.playAudio(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.playAudio + "?body=" + param);
        }
    },
    addCart: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.addCart && window.yhd.addCart(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.addCart + "?body=" + param);
        }
    },
    shake: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.shake && window.yhd.shake(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.shake + "?body=" + param);
        }
    },
    share: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            h5tonative.goToNative && h5tonative.goToNative("yhd://share/", param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.share + "?body=" + param);
        }
    },
  cutHandRemind: function (param) {
    if (h5tonative.yhdplatform.isandroid()) {
      window.yhd.cutHandRemind && window.yhd.cutHandRemind(param);
    }
    if (h5tonative.yhdplatform.isios()) {
      h5tonative.iOSCall(h5tonative.functionlist.cutHandRemind + "?body=" + param);
    }
  },
    appBack: function () {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.back && window.yhd.back();
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.goback);
        }
    },
    unionloginback: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.unionloginback && window.yhd.unionloginback(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.unionlogin + "?body=" + param);
        }
    },
    buoyCart: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.buoyCart && window.yhd.buoyCart(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.buoyCart + "?body=" + param);
        }
    },
    h5Init: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.h5Init && window.yhd.h5Init(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.h5Init + "?body=" + param);
        }
    }
    ,
    getRemoteData: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.getRemoteData && window.yhd.getRemoteData(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.getRemoteData + "?body=" + param);
        }
    },
    saveH5Data: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.saveH5Data && window.yhd.saveH5Data(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.saveH5Data + "?body=" + param);
        }
    },
    getH5Data: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.getH5Data && window.yhd.getH5Data(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.getH5Data + "?body=" + param);
        }
    },
    h5Refresh: function () {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.h5Refresh && window.yhd.h5Refresh();
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.h5Refresh);
        }
    },
    hideTab: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.hideTab && window.yhd.hideTab(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.hideTab + "?body=" + param);
        }
    },
    setTabBtn: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.setTabBtn && window.yhd.setTabBtn(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.setTabBtn + "?body=" + param);

        }
    },
    setCanReload: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.setCanReload && window.yhd.setCanReload(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.setCanReload + "?body=" + param);

        }
    },
    setHomeBtn: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.setHomeBtn && window.yhd.setHomeBtn(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.setHomeBtn + "?body=" + param);
        }
    },
    showBackBtn: function (param) {
        if (h5tonative.yhdplatform.isandroid()) {
            window.yhd.showBackBtn && window.yhd.showBackBtn(param);
        }
        if (h5tonative.yhdplatform.isios()) {
            h5tonative.iOSCall(h5tonative.functionlist.showBackBtn + "?body=" + param);
        }
    },
    showShareButton: function (param) {
      if (h5tonative.yhdplatform.isandroid()) {
          window.yhd.showShareButton && window.yhd.showShareButton(param);
      }
      if (h5tonative.yhdplatform.isios()) {
        h5tonative.iOSCall(h5tonative.functionlist.showShareButton + "?body=" + param);
      }
    },
    showSiftBtn: function (param) {
      if (h5tonative.yhdplatform.isandroid()) {
          window.yhd.showSiftBtn && window.yhd.showSiftBtn(param);
      }
      if (h5tonative.yhdplatform.isios()) {
        h5tonative.iOSCall(h5tonative.functionlist.showSiftBtn + "?body=" + param);
      }
    },
    setNavTitle: function (param) {
      if (h5tonative.yhdplatform.isandroid()) {
          window.yhd.setNavTitle && window.yhd.setNavTitle(param);
      }
      if (h5tonative.yhdplatform.isios()) {
        h5tonative.iOSCall(h5tonative.functionlist.setNavTitle + "?body=" + param);
      }
    },
    showPageButtons: function (param) {
      if (h5tonative.yhdplatform.isandroid()) {
          window.yhd.showPageButtons && window.yhd.showPageButtons(param);
      }
      if (h5tonative.yhdplatform.isios()) {
        h5tonative.iOSCall(h5tonative.functionlist.showPageButtons + "?body=" + param);
      }
    },
    showMyIconBtn: function (param) {
      if (h5tonative.yhdplatform.isandroid()) {
          window.yhd.showMyIconBtn && window.yhd.showMyIconBtn(param);
      }
      if (h5tonative.yhdplatform.isios()) {
        h5tonative.iOSCall(h5tonative.functionlist.showMyIconBtn + "?body=" + param);
      }
    },
    goSimilar: function (param) {
      if (h5tonative.yhdplatform.isandroid()) {
        h5tonative.goToNative('yhd://cartsimilar',param);
      }
      if (h5tonative.yhdplatform.isios()) {
        h5tonative.goToNative('yhd://similar',param);

      }
    },
};

if (typeof define === "function") {
    define("H5ToNative", [], function () {
        return h5tonative;
    });
}

