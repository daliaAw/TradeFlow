import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [categories, setCategories] = useState([
    { name: "Consumer Goods", path: "/consumergoods" },
    { name: "Technology and Electronics", path: "/technologyelectronics" },
    { name: "Fashion and Apparel", path: "/fashionapparel" },
    { name: "Home and Garden", path: "/homegarden" },
    { name: "Health and Wellness", path: "/healthwellness" },
  ]);

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        {/* Route components in here */}
        <Route path="/categories/${template literal}" element={<Category />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>

      {user ? (
        <></>
      ) : (
        <>
          <AuthPage setUser={setUser} />
        </>
      )}
    </main>
  );
}
