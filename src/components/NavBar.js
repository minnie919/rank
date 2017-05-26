import React from 'react';
import {observer} from 'mobx-react';
import '../less/nav.less'


@observer
export default class NavBar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const {navStore,changeList} = this.props;
    let data = navStore.nav;
    let curIndex = navStore.curIndex;
    let btnClass = navStore.isShow == false ? 'moreTag down':'moreTag';
    return (
      <div className="navBarWrap">
        <div className="navBar">
          <ul>
            {data.map(function (v, key) {
              let curClass = key == curIndex? 'cur':''
              return <li key={key} className={curClass} onClick={
                () =>{
                  navStore.setIndex(key);
                  changeList(v.cateLevel3Id);
                }
              }>{v.name}</li>;
            })}
          </ul>

        </div>
        <div className="moreBtn" onClick={
          () =>{
            if(navStore.isShow == false){
              navStore.setShow(true);
            }else{
              navStore.setShow(false);
            }
          }
        }>
          <div className={btnClass}></div>
        </div>
      </div>
    );
  }

}

