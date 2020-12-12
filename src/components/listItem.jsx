/*
 * @Author: cui
 * @Date: 2020-12-09 20:45:07
 * @LastEditors: cui
 * @LastEditTime: 2020-12-12 20:25:48
 * @Description: 
 */
import React, { Component } from "react";
import style from './listItem.module.css';
import classnames from 'classnames/bind';
import cn from 'classnames'

const cls = classnames.bind(style)


let count = 0;

class ListItem extends Component {

  constructor(props) {
    super()
  }

  manageCount() {
    return count + '个a'
  }


  render() {
    const _cn = cn({
      'themed-grid-col-s':!count
    })

    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">
          <span className={cls('title','list-title')}>
          {this.props.data.title}
          </span>
        </div>
        <div className="col-1 themed-grid-col">
        <span className='title'>${this.props.data.price}</span>
        </div>
        <div className={`col-2 themed-grid-col ${_cn}`}>{this.manageCount()} </div>
      </div>
    );
  }
}
export default ListItem;



