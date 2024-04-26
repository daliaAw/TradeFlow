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
        <nav className="top-Navbar navbar navbar-expand-lg ">

        <Link className="navbar-brand" to="/">TradeFlow</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse float-right" id="navbarSupportedContent">

          <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0 position-relativ w-50 mx-auto">
           <input onChange={(evt) => setNewSearch(evt.target.value)} className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" value={newSearch}/>
           <button className="search-btn " type="submit"><i class="fas fa-search"></i></button>
         </form>
 
        {user ? (
          <>
            <div className="nav-info">
            <span>
              Welcome, &nbsp;
              <Link to="/profile" className="nav-name">{user.name}</Link>
                {user && user.isBusiness ? (
                  <>&nbsp; | &nbsp;<Link to="/create">New Product</Link></>
                  ) : (
                    <>&nbsp;</>
                    )}
              &nbsp; | &nbsp;  <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
                </Link>&nbsp; |

            </span>
            &nbsp;  &nbsp; 
            <Link to="" onClick={handleLogOut} className="logout-btn">
              Log Out
            </Link>           
            </div>
          </>

        ) : (
          <>
            <Link to="/auth" user={user} setUser={setUser} setBusinessUser={setBusinessUser}>Login/Sign Up</Link>
          </>
        )}
        </div>
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