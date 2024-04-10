import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

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
      <nav>
        <Link to="/categories/consumergoods">Consumer Goods</Link>
        &nbsp; | &nbsp;
        <Link to="/categories/technologyelectronics">
          Technology and Electronics
        </Link>
        &nbsp; | &nbsp;
        <Link to="/categories/fashionapparel">Fashion and Apparel</Link>
        &nbsp; | &nbsp;
        <Link to="/categories/homegarden">Home and Garden</Link>
        &nbsp; | &nbsp;
        <Link to="/categories/healthwellness">Health and Wellness</Link>
        &nbsp; | &nbsp; &nbsp;&nbsp;
        <span>Welcome, {user.name}</span>
      </nav>
    </>
  );
}
