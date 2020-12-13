import React, { Component } from "react";
import style from "./listItem.module.css";
import classnames from "classnames/bind";
import cn from "classnames";

const cls = classnames.bind(style);

let count = 0;

class ListItem extends Component {
  constructor(props) {
    super(props);
    //   给函数添加this绑定
    // this.handelDecrease = this.handelDecrease.bind(this);
  }

  doSomethingWithCount() {
    if (count < 0) {
      count = 0;
    }
  }

  handelDecrease = (id) => {
    count--;
    console.log("id:" + id);
    this.doSomethingWithCount();
  };

  handelIncrease = () => {
    count++;
    console.log(count);
  };

  render() {
    const _cn = cn({
      "themed-grid-col-s": !count,
    });

    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">
          <span className={cls("title", "list-title")}>
            {this.props.data.title}
          </span>
        </div>
        <div className="col-1 themed-grid-col">
          <span className="title">${this.props.data.price}</span>
        </div>
        <div className={`col-2 themed-grid-col ${_cn}`}>
          {/* //   给函数添加this绑定 */}
          {/* <button
            onClick={this.handelDecrease.bind(this,this.props.data.id)}
            type="button"
            className="btn btn-primary"
          >
            -
          </button> */}
          {/* //   给函数添加this绑定 */}
          {/* <button
            onClick={this.handelDecrease}
            type="button"
            className="btn btn-primary"
          >
            -
          </button> */}
          {/* <button
            onClick={this.handelDecrease}
            type="button"
            className="btn btn-primary"
          >
            -
          </button> */}
          <span className={cls("digital")}>{count}</span>
          <button
            onClick={this.handelIncrease}
            type="button"
            className="btn btn-primary"
          >
            +
          </button>
        </div>
        <div className="col-1 themed-grid-col">
          <button onClick={()=>{this.props.onDelete(this.props.data.id)}} className='btn btn-danger btn-sm'>删除</button>
        </div>
      </div>
    );
  }
}
export default ListItem;
