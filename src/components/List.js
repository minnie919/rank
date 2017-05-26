import React from 'react';
import {observer} from 'mobx-react';
import 'react-fastclick';
import '../less/list.less'


@observer
export default class List extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const {listStore,index} = this.props;
    let data = listStore.list;
    return (
      <div className="list_wrap">
        <ul>
          {data.map(function (v, key) {
            return <li key={key}>
              <a href={v.productUrl} className="pro_item">
                <div className="left_pic"><img src={v.picSrc} alt=""/></div>
                <div className="right_detail">
                  <div className="detail_wrap">
                    <div className="pro_name">{v.name}</div>
                    <div className="pro_fq">{v.productTag}<p>疯抢指数</p></div>
                  </div>
                  <div className="buy_wrap">
                    <div className="price">&yen;<em>{v.price}</em></div>
                    <div className="buy_cart"></div>
                  </div>
                </div>
              </a>
            </li>;
          })}
        </ul>

      </div>
    );
  }

}

