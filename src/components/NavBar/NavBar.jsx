import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
//import AuthPage from "../../pages/AuthPage/AuthPage";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const categories = [
    { name: "Consumer Goods", path: "categories/consumergoods" },
    { name: "Technology and Electronics", path: "categories/technologyelectronics",},
    { name: "Fashion and Apparel", path: "categories/fashionapparel" },
    { name: "Home and Garden", path: "categories/homegarden" },
    { name: "Health and Wellness", path: "categories/healthwellness" },
  ];

  // const location = useLocation();
  // const isRootPath = location.pathname === "/";

  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <>
      <div>
        <>
        <nav className="top-Navbar navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/"><span>TradeFlow</span></Link>
        <div className="nav-search">
          <div className="input-group">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                  <span className="input-group-text"><i className="fas fa-search"></i></span>
              </div>
          </div>
      </div>
 
       
        {user ? (
          <>
            <div>
            <span>
              Welcome, &nbsp;
              <Link to="/profile">{user.name}</Link>
              &nbsp; | &nbsp; <Link to="/create">New Product</Link>
              &nbsp; | &nbsp;   <Link to="/cart">Cart</Link>

            </span>
            &nbsp;  &nbsp; 
            <Link to="" onClick={handleLogOut}>
              Log Out
            </Link>           
            </div>
          </>

        ) : (
          <>
            <Link to="">Login/Sign Up</Link>
          </>
        )}
         </nav>
        </>
      </div>
      <nav className="second-Nav navbar navbar-expand-lg ">
      {categories.map((category) => (
        <span className="nav-title" key={category.name}>
                <Link to={`/cat/${category.name}`} >{category.name}</Link> &nbsp; &nbsp;
            </span>
          ))}
      </nav>
      </>
  );
  
}