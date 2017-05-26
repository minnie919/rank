import React from 'react';
import {observer} from 'mobx-react';
import 'react-fastclick';
import List from './List';
import NavBar from  './NavBar';
import NavShow from  './NavShow';




@observer
export default class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
  }



  render() {
    const {listStore,navStore} = this.props;
    return (
      <div>
        <NavBar navStore={navStore} changeList={(key)=>listStore.change(key)}/>
        <NavShow navStore={navStore} changeList={(key)=>listStore.change(key)}/>
        <List listStore={listStore}/>
      </div>
    );
  }

}

