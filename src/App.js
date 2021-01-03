/*
 * @Author: cui
 * @Date: 2020-12-04 23:02:56
 * @LastEditors: cui
 * @LastEditTime: 2021-01-03 14:15:14
 * @Description: 
 */
import "./App.css";
import ListItem from "./components/listItem";
import React, { PureComponent } from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
        {
          id: 1,
          title: "sony 65寸高清电视666666",
          price: 4000,
          value: 3
        },
        {
          id: 2,
          title: "华为 Meta30",
          price: 6000,
          value: 4
        },
        {
          id: 3,
          title: "华硕 玩家国度笔记本",
          price: 10000,
          value: 5
        },
      ]
    }
  }

  randerList() {
    return this.state.listData.map(item => {
      return <ListItem
        key={item.id}
        data={item}
        onIncrease={this.handelIncrease}
        onDecrease={this.handelDecrease}
        onDelete={this.handleDelete} />
    })
  }

  handleDelete = (id) => {
    const listData = this.state.listData.filter(item => item.id !== id);
    this.setState((state, props) => {
      return {
        listData
      }
    })
  }

  handleAmount = () => {
    const _list = this.state.listData.concat([]);
    _list.pop();
    this.setState({
      listData: _list
    })
  }

  handelDecrease = (id) => {
    console.log('id:', id)

    const _data = this.state.listData.map(item => {
      if (item.id === id) {
        const _item = { ...item };
        _item.value--;
        if (_item.value < 0) _item.value = 0;
        return _item
      } else {
        return item;
      }
    })

    this.setState({
      listData: _data
    })
  };

  handelIncrease = (id) => {
    console.log('id:', id)
    const _data = this.state.listData.map(item => {
      if (item.id === id) {
        const _item = { ...item };
        _item.value++;
        return _item;
      } else {
        return item;
      }
    })

    this.setState({
      listData: _data
    })
  };



  handleReset = () => {
    const _list = this.state.listData.map(item => {
      const _item = { ...item }
      _item.value = 0;
      return _item
    })

    this.setState({
      listData: _list
    })
  }

  render() {
    return (
      <div className="container">
        <button style={{ margin: '20px' }}
          onClick={this.handleReset} className='btn btn-primary'>重置</button>
        {!this.state.listData.length && <div className='text-center'>购物车是空的</div>}
        {this.randerList()}
      </div>
    );
  }
}

export default App;
