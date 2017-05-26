import {observable, action} from 'mobx';
import ListModel from '../models/ListModel'

import Sever from '../api/Server';
import Tools from '../lib/tools';
export default class ListStore {
  @observable list = [];

  toJS() {
    return this.list.map(item => item.toJS());
  }


  @action change(catId){
    let me = this;
    Sever.getPmsRankProducts({
      rankListType: 2,
      provinceId: 1,
      guid: 0,
      pageCode: 17007,
      sectionId: 3,
      cateLevel3Ids: catId
    },function (data) {
      let array = Tools.getValue(data.data&&data.data[0],'pmsdwigProductList');
      me.list =   array&&array.length>0&&array.map(function (oneList) {
          return ListModel.fromJS(me,oneList);
        })||[];
    });
  }




  static fromJS(array) {
    const listStore = new ListStore();
    listStore.list = array&&array.length>0&&array.map(function (oneList) {
        return ListModel.fromJS(listStore,oneList);
    })||[];
    return listStore;
  }
}
