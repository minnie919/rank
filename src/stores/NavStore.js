import {observable, action} from 'mobx';
import NavModel from '../models/NavModel'

export default class NavStore {
  @observable nav = [];
  @observable curIndex=0;
  @observable isShow = false;


  toJS() {
    return this.nav.map(item => item.toJS());
  }
  //设置当前点击的index
  @action setIndex(index){
    let me  = this;
    me.curIndex = index;
  }

  //切换nav下来显示隐藏
  @action setShow(isShow){
    let me = this;
    me.isShow = isShow;
  }

  @action add(text){
    this.nav.push({
      name: text
    })
  }
  @action deleteMsg(idx){
    this.nav.splice(idx,1);
  }



  static fromJS(array) {
    const navStore = new NavStore();
    navStore.nav = array&&array.length>0&&array.map(function (oneList) {
        return NavModel.fromJS(navStore,oneList);
    })||[];
    return navStore;
  }
}
