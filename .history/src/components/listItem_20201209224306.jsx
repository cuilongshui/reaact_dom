/*
 * @Author: your name
 * @Date: 2020-12-09 20:45:07
 * @LastEditTime: 2020-12-09 22:43:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\listItem.jsx
 */
import React, { Component } from "react";
const product = {
  id: 1,
  name: "Sony 65英寸高清液晶电视",
  price: 4000,
  stock: 20,
};

let count = 0;

class ListItem extends Component {
  manageCount() {
    return count + '个'
  }


  render() {
    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">{product.name}</div>
        <div className="col-1 themed-grid-col">${product.price}</div>
        <div className="col-2 themed-grid-col">{this.manageCount()} </div>
      </div>
    );
  }
}
export default ListItem;
