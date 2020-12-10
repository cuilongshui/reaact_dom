/*
 * @Author: cui
 * @Date: 2020-12-09 20:45:07
 * @LastEditors: cui
 * @LastEditTime: 2020-12-10 23:46:21
 * @Description: 
 */
import React, { Component } from "react";
import './listItem.css'


let count = 0;

class ListItem extends Component {

  constructor(props) {
    super()
  }

  manageCount() {
    return count + '个a'
  }


  render() {
    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">
          <span style={{color:'#710000',fontSize:'20px'}}>
          {this.props.data.title}
          </span>
        </div>
        <div className="col-1 themed-grid-col">
        <span className='title'>${this.props.data.price}</span>
        </div>
        <div className={`col-2 themed-grid-col${count ? '' : '-s'}`}>{this.manageCount()} </div>
      </div>
    );
  }
}
export default ListItem;



