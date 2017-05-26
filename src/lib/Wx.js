import wx from 'we-jssdk';
import H5ToNative from '../lib/h5tonative';
import Server from '../api/Server'

export default class Wx {
  static init(shareData) {
    let me = this;
    if (H5ToNative.yhdplatform.isother()) {
      me.wxShare(shareData);
    }else{
      me.appShare(shareData);
    }

    //H5ToNative.setCanReload('{"canReload":"0"}');
  }

  static appShare(shareData) {
    window.shareCallback = function () {
      try{
        var spmData=window.tracker_ref_yhd.getData($("body"));
        spmData.tpa='11';
        spmData.tpi='1';
        window.gotracker(2, "defaultButton", null, spmData);
      }catch(e){
        window.console.log(e);
      }
    };
    H5ToNative.showShareButton('{"style":"2","title":"'
      + shareData.shareTitle + '","content":"'
      + shareData.shareContent + '","imageUrl":"'
      + shareData.shareImg + '","url":"'
      + window.location.href + '","callback":"shareCallback"}');
  }

  static wxShare(shareData,scallback) {
    let appId, timestamp, nonceStr, signature;
    $.getJSON('//wechat.yhd.com/wechat/getWeixinConfig.do?url=' + encodeURIComponent(window.location.href), function (res) {
        let wxData = res.data;
        appId = wxData.appId;
        timestamp = wxData.timestamp;
        nonceStr = wxData.nonceStr;
        signature = wxData.signature;
      wx.config({
        debug: false,
        appId: appId,
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
      });
      wx.ready(function () {
        wx.onMenuShareAppMessage({
          title: shareData.shareTitle,
          link: shareData.href,
          imgUrl: shareData.shareImg,
          desc: shareData.shareContent,
          success(){
            scallback&&scallback();
          }
        });

        wx.onMenuShareTimeline({
          title: shareData.shareTitle,
          link: shareData.href,
          imgUrl: shareData.shareImg,
          desc: shareData.shareContent,
          success(){
            scallback&&scallback();
            // try{
            //   var spmData=window.tracker_ref_yhd.getData($("body"));
            //   spmData.tpa='11';
            //   spmData.tpi='1';
            //   window.gotracker(2, "defaultButton", null, spmData);
            // }catch(e){
            //   window.console.log(e);
            // }
          }
        });
      });
    });
  }

}
