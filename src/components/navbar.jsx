const  Navbar = ({total,onReset}) => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="wrap">
          <span className="title">Nav</span>
          <span className="badge badge-pill badge-primary ml-2 mr-2">{total}</span>
          <button onClick={onReset} className="btn btn-outline-success my-2 my-sm-0 fr" type="button">Reset</button>
        </div>
      </nav>
   );
}
 
export default Navbar;


