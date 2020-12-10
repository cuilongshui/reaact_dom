/*
 * @Author: cui
 * @Date: 2020-12-10 22:20:14
 * @LastEditors: cui
 * @LastEditTime: 2020-12-10 22:23:57
 * @Description: 
 */
import React from 'react'
let count = 0;


const ListItem = (props) => {
  return (
    <div className="row mb-3">
      <div className="col-6 themed-grid-col">{props.data.title}</div>
      <div className="col-1 themed-grid-col">${props.data.price}</div>
      <div className="col-2 themed-grid-col">{count} </div>
    </div>
}

export default ListItem;