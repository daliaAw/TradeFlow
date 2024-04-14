import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
import cart_icon from "./cart_48.png"
//import AuthPage from "../../pages/AuthPage/AuthPage";

export default function NavBar({ user, setUser, businessUser, setBusinessUser, products, setSearchResults }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  
  const categories = [
    { name: "Consumer Goods"},
    { name: "Technology and Electronics"},
    { name: "Fashion and Apparel"},
    { name: "Home and Garden"},
    { name: "Health and Wellness"},
  ];
  
  // const location = useLocation();
  // const isRootPath = location.pathname === "/";
  
    const navigate = useNavigate()
    const [newSearch, setNewSearch] = useState("")

    function handleSearch(e){
      e.preventDefault()
      if (newSearch.length > 0){
        navigate("/search", {state: newSearch})
        setNewSearch("")
      }
      else {
        alert("Search bar empty")
      }
    }

  return (
    <>
      <div>
        <>
        <nav className="top-Navbar navbar navbar-expand-lg navbar-light">

        <Link className="navbar-brand" to="/">TradeFlow</Link>
        <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
          <input onChange={(evt) => setNewSearch(evt.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={newSearch}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
 
       
        {user ? (
          <>
            <div>
            <span>
              Welcome, &nbsp;
              <Link to="/profile">{user.name}</Link>
                {user && user.isBusiness ? (
                  <>&nbsp; | &nbsp;<Link to="/create">New Product</Link></>
                  ) : (
                    <>&nbsp;</>
                    )}
              &nbsp; | &nbsp;   <Link to="/cart"><img src={cart_icon} alt="" /></Link>&nbsp; |

            </span>
            &nbsp;  &nbsp; 
            <Link to="" onClick={handleLogOut}>
              Log Out
            </Link>           
            </div>
          </>

        ) : (
          <>
            <Link to="" setUser={setUser} setBusinessUser={setBusinessUser}>Login/Sign Up</Link>
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