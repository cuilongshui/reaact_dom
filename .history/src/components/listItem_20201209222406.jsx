/*
 * @Author: your name
 * @Date: 2020-12-09 20:45:07
 * @LastEditTime: 2020-12-09 22:24:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\listItem.jsx
 */
import React, { Component } from 'react';
const product = {
    id: 1,
    name: 'Sony 65英寸高清液晶电视',
    price: 4000,
    stock:20
}

let conut = 0;

class ListItem extends Component {
    render() { 
        return (
            <div className="row mb-3">
                <div className="col-6"></div>
                <div className="col-1"></div>
                <div className="col-2"></div>  
            </div>
        );
    }
}
export default ListItem;



