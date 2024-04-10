import { useState } from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const [categories, setCategories] = useState([
    { name: "Consumer Goods", path: "categories/consumergoods" },
    {
      name: "Technology and Electronics",
      path: "categories/technologyelectronics",
    },
    { name: "Fashion and Apparel", path: "categories/fashionapparel" },
    { name: "Home and Garden", path: "categories/homegarden" },
    { name: "Health and Wellness", path: "categories/healthwellness" },
  ]);

  return (
    <>
      <div>
        <h2>Trade Flow</h2>
        &nbsp; &nbsp;
        <h3>Search bar will go here</h3>
        &nbsp; &nbsp;
        {user ? (
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        ) : (
          <Link>Login</Link> / <Link>Sign Up</Link>
        )}
      </div>
      <>
        <nav>
          <ul>
            {categories.map((category) => (
              <span key={category.name}>
                <Link to={`categories/${category.name}`} setCategories={setCategories} >{category.name}</Link> &nbsp; 
              </span>
            ))}
          </ul>
        </nav>
      </>
      &nbsp; | &nbsp; &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
    </>
  );
}
