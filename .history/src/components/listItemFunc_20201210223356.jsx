import React from 'react'

let count = 0;


//  props 直接通过参数传递

const ListItem = (props) => {
  return (
    <div className="row mb-3">
      <div className="col-6 themed-grid-col">{props.data.title}</div>
      <div className="col-1 themed-grid-col">${props.data.price}</div>
      <div className="col-2 themed-grid-col">{count} </div>
    </div>
  )
}

export default ListItem;