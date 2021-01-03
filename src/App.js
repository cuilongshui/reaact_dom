import "./App.css";
import ListPage from "./components/listPage";
import Navbar from './components/navbar'
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
      <>
        <Navbar
          onReset={this.handleReset}
          total={this.state.listData.length}
        />
        <ListPage
          data={this.state.listData}
          handelDecrease={this.handelDecrease}
          handleDelete={this.handleDelete}
          handelIncrease={this.handelIncrease}
        />
      </>
    );
  }
}

export default App;
