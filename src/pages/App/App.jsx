import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import CategoriesPage from '../CategoriesPage/CategoriesPage';
import CategoryPage from '../CategoryPage/CategoryPage';
import ItemDetailsPage from '../ItemDetailsPage/ItemDetailsPage';
import CreateItemPage from '../CreateItemPage/CreateItemPage';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:categoryName" element={<CategoryPage />} />
              <Route path="/categories/:itemId" element={<ItemDetailsPage />} />
              <Route path="/create" element={<CreateItemPage />} />
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
      <NavBar user={user} setUser={setUser} />
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.path}>
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Switch>
        {categories.map((category) => (
          <Route key={category.path} path={category.path}>
            <SingleCategory categoryName={category.name} />
          </Route>
        ))}
      </Switch>

      <AuthPage />
    </main>
  );
}
