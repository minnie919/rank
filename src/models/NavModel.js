import {observable} from 'mobx';

export default class NavModel {
  store;
  @observable name;
  @observable isShow = false;//编辑数据
  cateLevel3Id;

  constructor(store,
              name,cateLevel3Id) {
    this.store = store;
    this.name = name;
    this.cateLevel3Id = cateLevel3Id;
  }

  toJS() {
    return {
      store: this.store,
      name: this.name,
      cateLevel3Id:this.cateLevel3Id
    };
  }

  static fromJS(store, object) {
    return new NavModel(store, object.mcsiteCateLevel3Name,object.cateLevel3Id);
  }
}
