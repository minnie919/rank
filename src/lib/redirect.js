import h5tonative from './h5tonative';


export default class Redirect {

    static productDetail(pmId, pId, promotionId, dom, tag) {
        let spm = window.tracker_ref_yhd;
        let isH5 = h5tonative.yhdplatform.isother();
        let websiteurl = "http://m.yhd.com";
        let me = this;
        var appPromoId = '0';
        if (promotionId != '0' && promotionId != null && promotionId != "null" && promotionId != "" && typeof(promotionId) != 'undefined') {
            appPromoId = promotionId + "_landingpage";
        }

        var url = '';

        if (isH5) {
            if (promotionId && promotionId != '0') {
                url += websiteurl + "/item/lp/" + promotionId + "_" + pmId;
            } else {
                url += websiteurl + "/item/" + pmId;
            }
            spm.refreshPage(url, dom, tag);

        } else {
            var params = {
                "pmId": pmId
            };
            //LandingPage详情页
            if (appPromoId != '0') {
                params["promotionId"] = appPromoId;
            }
            if (dom) {
                var spmData = spm.getData(dom, tag);
                if (spmData) {
                    params["tp"] = spmData.tp;
                    params["tc"] = spmData.tc;
                }
            }
            me.gotoWireless2Detail(params);
        }
    }


    /**
     * 跳转到app详情页
     * @param  {[type]} params 入参：{pmId:,promotionId,openSource,remainTime,isNotice,IS_FROM_COMMUNITY}
     * @return {[type]}        [description]
     */

    static gotoWireless2Detail = function (params) {
        h5tonative.goToNative("yhd://productdetail/", JSON.stringify(params));
    };

    static remind = function(params,scallback,fcalllback,controlStore){
      params = JSON.stringify(params);

      h5tonative.cutHandRemind(params);
      window.nativeCallback = function (callid, res) {
        if (callid == 10) {
          if (res == 0) {
            controlStore.setToast('提醒成功')
          } else if (res == 1) {
            controlStore.setToast('提醒失败')
          } else {
            controlStore.setToast('提醒失败')
          }
        }
      };

    }

    static getSimilar = function(params){
      var productDetailUrl;
      var promotionId=params.promotionId;
      if(promotionId != '0' && promotionId != null && promotionId != "null" && promotionId != "" && typeof(promotionId) != 'undefined'){
        productDetailUrl='yhd://productdetail?body={\"pmId\":\"'+params.pmId+'\",\"promotionId\":\"'+promotionId+'_landingPage\"}'
      }else{
        productDetailUrl='yhd://productdetail?body={\"pmId\":\"'+params.pmId+'\"}'
      }
      params.productDetailUrl = productDetailUrl;
      h5tonative.goSimilar(JSON.stringify(params));
    }

}

