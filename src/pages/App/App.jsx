import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { getUser, getBusinessUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import ItemDetailsPage from "../ItemDetailsPage/ItemDetailsPage";
import CreateItemPage from "../CreateItemPage/CreateItemPage";
import ProfilePage from "../ProfilePage/ProfilePage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [businessUser, setBusinessUsr] = useState(getBusinessUser());

  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <>
      <>
        <main className="App">
          <NavBar user={user} setUser={setUser} />
          {user ? (
            <>
              <h1>Home Page</h1>
            </>
          ) : (
            <>{isRootPath && <AuthPage setUser={setUser} />}</>
          )}
        </main>
      </>
      <Routes>
        <Route
          path="/profile"
          element={<ProfilePage user={user} businessUser={businessUser} />}
        ></Route>
      </Routes>
    </>
  );
}
