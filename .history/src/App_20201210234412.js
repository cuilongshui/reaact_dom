import "./App.css";
import ListItem from "./components/listItem";
import React, { Component } from 'react';
// import ListItem from './components/listItemFunc'

const listData = [
  {
    id: 1,
    title: "sony 65寸高清电视",
    price: 4000,
  },
  {
    id: 2,
    title: "华为 Meta30",
    price: 6000,
  },
  {
    id: 3,
    title: "华硕 玩家国度笔记本",
    price: 10000,
  },
];

class App extends Component {
  randerList() {
    // if (!listData.length) {
    //   return <div className='text-center'>购物车是空的</div>
    // }
    return listData.map(item => {
      return <ListItem key={item.id} data={item} />
    })
  }

  render() {

    return (
      //  <React.Fragments></React.Fragments> 
      // 包含子元素无需生成多余的子节点  简写为---->  <></>
      <>
        <div className="container">
          {!listData.length && <div className='text-center'>购物车是空的</div>}
          {this.randerList()}
        </div>
      </>
    );
  }
}

export default App;
