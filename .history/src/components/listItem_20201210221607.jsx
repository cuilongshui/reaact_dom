/*
 * @Author: your name
 * @Date: 2020-12-09 20:45:07
 * @LastEditTime: 2020-12-10 22:16:07
 * @LastEditors: cui
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\listItem.jsx
 */
import React, { Component } from "react";


let count = 0;

class ListItem extends Component {

  constructor(props) {
    super()
  }

  manageCount() {
    return count + '个'
  }


  render() {
    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">{this.props.data.name}</div>
        <div className="col-1 themed-grid-col">${this.props.data.price}</div>
        <div className="col-2 themed-grid-col">{this.manageCount()} </div>
      </div>
    );
  }
}
export default ListItem;



