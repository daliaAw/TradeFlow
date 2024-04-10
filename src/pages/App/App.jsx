import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
import SingleCategory from "../SingleCategory/SingleCategory";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <>
        <main className="App">
          {user ? (
            <NavBar user={user} setUser={setUser} />
          ) : (
            <>
              <AuthPage setUser={setUser} />
            </>
          )}
        </main>
      </>
    </>
  );
}
