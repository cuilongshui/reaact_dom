import React, { PureComponent } from "react";
import style from "./listItem.module.css";
import classnames from "classnames/bind";
import cn from "classnames";

const cls = classnames.bind(style);
class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  doSomethingWithCount() {
    if (this.state.count < 0) {
      this.setState({
        count: 0,
      });
    }
  }

  handelDecrease = (id) => {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => {}
    );
  };

  handelIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  //重新渲染reader方法执行前  避免不必要的渲染
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("props", this.props, nextProps);
  //   console.log("state", this.state, nextState);

  //   if (this.state.count === nextState.count) return false;
  //   return true;
  // }




  render() {
    console.log("listItem rendering");
    const _cn = cn({
      "themed-grid-col-s": !this.state.count,
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
          <button
            onClick={this.handelDecrease.bind(this, this.props.data.id)}
            type="button"
            className="btn btn-primary"
          >
            -
          </button>
          <span className={cls("digital")}>{this.state.count}</span>
          <button
            onClick={this.handelIncrease}
            type="button"
            className="btn btn-primary"
          >
            +
          </button>
        </div>
        <div className="col-2 themed-grid-col ">
          ￥ {this.props.data.price * this.state.count}
        </div>
        <div className="col-1 themed-grid-col">
          <button
            onClick={() => {
              this.props.onDelete(this.props.data.id);
            }}
            className="btn btn-danger btn-sm"
          >
            删除
          </button>
        </div>
      </div>
    );
  }
}
export default ListItem;
