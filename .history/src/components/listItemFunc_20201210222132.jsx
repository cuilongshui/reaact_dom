const ListItem = (props) => {
  return (  
    <div className="row mb-3">
    <div className="col-6 themed-grid-col">{this.props.data.title}</div>
    <div className="col-1 themed-grid-col">${this.props.data.price}</div>
    <div className="col-2 themed-grid-col">{this.manageCount()} </div>
  </div>
}
 
export default ListItem;