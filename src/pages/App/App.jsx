import { useState } from "react";
import { Routes, Route, Link, useLocation, useParams } from "react-router-dom";
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
  const [businessUser, setBusinessUser] = useState(getBusinessUser());

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

  let { categoryName } = useParams();

  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <>
      <>
        <main className="App">
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route
              path="/categories/:categoryName"
              key={categories.name}
              setCategories={setCategories}
              element={
                <CategoryPage
                  category={categories.name}
                  key={categories.name}
                  name={categoryName}
                />
              }
            />
            <Route path="/categories/:itemId" element={<ItemDetailsPage />} />
          </Routes>
          {user ? (
            <>
              <Routes>
                {/* Route components in here */}

                <Route path="/create" element={<CreateItemPage />} />
                <Route path="/cart" element={<NewOrderPage />} />
                <Route path="/orders" element={<OrderHistoryPage />} />
                <Route
                  path="/profile"
                  element={
                    <ProfilePage user={user} businessUser={businessUser} />
                  }
                ></Route>
              </Routes>
            </>
          ) : (
            <>
              <>{isRootPath && <AuthPage setUser={setUser} />}</>
            </>
          )}
        </main>
      </>
    </>
  );
}
