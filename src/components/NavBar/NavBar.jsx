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

        <Link className="navbar-brand" to="/">TradeFlow</Link>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
 
       
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
        <span key={category.name}>
                <Link to={`/cat/${category.name}`} >{category.name}</Link> &nbsp; &nbsp;
            </span>
          ))}
      </nav>
      
      </>

  );
  
}