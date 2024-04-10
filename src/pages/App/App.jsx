import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
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

  return (
    <>
      <>
        <main className="App">
          <NavBar user={user} setUser={setUser} />
          {user ? (
            console.log("User Logged In")
          ) : (
            <>
              <AuthPage />
            </>
          )}
        </main>
      </>
      <Routes>
        <Route path="/profile" element={<ProfilePage user={user} />}></Route>
      </Routes>
    </>
  );
}
