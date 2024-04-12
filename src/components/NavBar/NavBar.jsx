import { useState } from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
// import AuthPage from "../../pages/AuthPage/AuthPage";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const [categories, setCategories] = useState([
    { name: "Consumer Goods", path: "categories/consumergoods" },
    { name: "Technology and Electronics", path: "categories/technologyelectronics",},
    { name: "Fashion and Apparel", path: "categories/fashionapparel" },
    { name: "Home and Garden", path: "categories/homegarden" },
    { name: "Health and Wellness", path: "categories/healthwellness" },
  ]);

  // const location = useLocation();
  // const isRootPath = location.pathname === "/";

  return (
    <>
      <div>
        <Link to="/">TradeFlow</Link>
        &nbsp; &nbsp;
        <h3>Search bar will go here</h3>
        &nbsp; &nbsp;
        <>
        <nav>
            {categories.map((category) => (
              <span key={category.name}>
                <Link to={`/${category.name}`} setCategories={setCategories}>{category.name}</Link> &nbsp; &nbsp;
              </span>
            ))}
        </nav>
        </>
        {user ? (
          <>

            <Link to="" onClick={handleLogOut}>
              Log Out
            </Link>
            &nbsp; &nbsp;&nbsp;
            <span>
              Welcome,
              <Link to="/profile">{user.name}</Link>&nbsp;&nbsp;
              <Link to="/cart">Cart</Link>
              &nbsp; &nbsp;<Link to="/create">New Product</Link>
            </span>

          </>

        ) : (
          <>
            <Link to="">Login/Sign Up</Link>
          </>
        )}
      </div>
      <>

      </>
       &nbsp; &nbsp;&nbsp;
    </>
  );
}
