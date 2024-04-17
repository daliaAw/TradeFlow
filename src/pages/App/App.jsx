import { useState, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import { display } from "../../utilities/items-api"
import { getCart } from "../../utilities/orders-api"

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
import Footer from "../../components/Footer/Footer";
import { getBusinessUser } from "../../utilities/businessUser-api";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import CartPage from "../CartPage/CartPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [businessUser, setBusinessUser] = useState({});
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState({});
  const [warning, setWarning] = useState(false)

  useEffect(() => {
    async function logBusinessUser() {
      const businessUser = await getBusinessUser(user?._id);
      setBusinessUser(businessUser);
      console.log(businessUser);
    }
    logBusinessUser();
  }, []);

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
  const [products, setProducts] = useState([]);
  useEffect(() => {
      async function getProducts() {
          try {
              const products = await display();
              setProducts(products);
          } catch (error) {
              console.log("Error fetching products:", error);
          }
      }
      getProducts();
  }, []);
  
  useEffect(() => {
    async function fetchCart() {
      try {
        const cart = await getCart();
        console.log('shoopingcart',cart)
        setCart(cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }
    fetchCart();
  }, [user]);

  const location = useLocation();
  const isRootPath = location.pathname === "/";





  return (
    <>
      <>
        <main className="App">
          <NavBar user={user} setUser={setUser} />
          <Routes>
              <Route path="/" element={<HomePage  products={products}/>} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/cat/:categoryName" setCategories={setCategories} categoryName={categories.name}  
              element={<CategoryPage key={categories.name} products={products} categoryName={categories.name}/>} />
              <Route path="/:categoryName/:itemId" element={ <ItemDetailsPage cart={cart} setCart={setCart} products={products}/>} />
              <Route exact path="/item/:category/:id" element={<ItemDetailsPage cart={cart} setCart={setCart} />} />
              <Route path="/shoppingcart" element={<ShoppingCart cart={cart} />} />

          </Routes>

          {user ? (
            <>
            <Routes>
                {/* Route components in here */}
                <Route path="/profile"
                  element={<ProfilePage user={user} businessUser={businessUser} />}></Route>
                <Route path="/create" element={<CreateItemPage />} />
                <Route path="/shoppingcart/add" element={<CartPage />} />
                <Route path="/new-order" element={<NewOrderPage />} />
                
                <Route path="/orders" element={<OrderHistoryPage />} />
                <Route path="/cart" element={<ShoppingCart cartItems={cart} />} />


              </Routes>
            </>
          ) : (
            <>
            <>
              {isRootPath && (
                <AuthPage
                  setUser={setUser}
                  setBusinessUser={setBusinessUser}
                />
              )}
            </>
          </>
        )}
      </main>
      <Footer />
    </>
  </>
);
}