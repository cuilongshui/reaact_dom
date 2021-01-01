/*
 * @Author: cui
 * @Date: 2020-12-04 23:02:56
 * @LastEditors: cui
 * @LastEditTime: 2020-12-13 12:17:44
 * @Description: 
 */
import "./App.css";
import ListItem from "./components/listItem";
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      listData: [
        {
          id: 1,
          title: "sony 65寸高清电视666666",
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
      ]
    }
  }


  randerList() {
    return this.state.listData.map(item => {
      return <ListItem key={item.id} data={item} onDelete={this.handleDelete} />
    })
  }

  handleDelete = (id) => {
    const listData = this.state.listData.filter(item => item.id !== id);
    this.setState((state,props)=>{
        return{
            listData
        }
    })
  }

  render() {

    return (
      <div className="container">
        <span className='title'>header</span>
        {!this.state.listData.length && <div className='text-center'>购物车是空的</div>}
        {this.randerList()}
      </div>
    );
  }
}

export default App;
