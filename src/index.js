import React from 'react';
import ReactDOM from 'react-dom';

import 'react-fastclick';
//数据
import ListStore from './stores/ListStore';
import NavStore from './stores/NavStore';
//ui
import App from './components/Main.js';
//数据接口
import Sever from './api/Server';

import './less/index.less';

Sever.getPmsRankCategories({
  rankListType: 2,
  provinceId: 1,
  guid: 0,
  pageCode: 17007,
  sectionId: 2
},function (data) {

  let navStore = NavStore.fromJS(data.data);
  let listStore = ListStore.fromJS(data.data[0].pmsdwigProductList);

  ReactDOM.render(
    <App listStore={listStore} navStore={navStore}/>,
    document.getElementById('root')
  );
})








