import React from 'react';
import {observer} from 'mobx-react';
import '../less/navlist.less'


@observer
export default class NavShow extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const {navStore,changeList} = this.props;
    let data = navStore.nav;
    let curIndex = navStore.curIndex;
    let listClass = navStore.isShow == false ? 'rank_navlist list_hide':'rank_navlist';
    return (
      <div className={listClass}>
        <div className="rank_navlist_title"><span>全部分类</span></div>
        <div className="rank_navlist_box">
          <ul>
            {data.map(function (v, key) {
              let curClass = key == curIndex? 'cur':''
              return <li key={key} className={curClass} onClick={
                () =>{
                  navStore.setIndex(key);
                  if(navStore.isShow == false){
                    navStore.setShow(true);
                  }else{
                    navStore.setShow(false);
                  }
                  changeList(v.cateLevel3Id);
                }
              }>{v.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

