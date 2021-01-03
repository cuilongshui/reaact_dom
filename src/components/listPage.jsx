import React, { PureComponent } from "react";
import ListItem from "./listItem";

class ListPage extends PureComponent {
  randerList() {
    return this.props.data.map((item) => {
      return (
        <ListItem
          key={item.id}
          data={item}
          onIncrease={this.props.handelIncrease}
          onDecrease={this.props.handelDecrease}
          onDelete={this.props.handleDelete}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        {!this.props.data.length && (
          <div className="text-center">购物车是空的</div>
        )}
        {this.randerList()}
      </div>
    );
  }
}

export default ListPage;
