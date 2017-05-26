import {observable} from 'mobx';

export default class ListModel {
  store;
  @observable name;
  @observable price;
  @observable picSrc;
  @observable productUrl;
  @observable productTag;

  constructor(store,
              name,price,picSrc,productUrl,productTag) {
    this.store = store;
    this.name = name;
    this.price = price;
    this.picSrc = picSrc;
    this.productUrl = productUrl;
    this.productTag = productTag;
  }

  toJS() {
    return {
      store: this.store,
      name: this.name,
      price:this.price,
      picSrc:this.picSrc,
      productUrl:this.productUrl,
      productTag:this.productTag
    };
  }

  static fromJS(store, object) {
    return new ListModel(store, object.productCName, object.common_price,object.productImageUrl,object.product_url_h5,object.productTag);
  }
}
