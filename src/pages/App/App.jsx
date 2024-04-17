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
import CreateItemPage from "../CreateItemPage/CreateItemPage";
import ItemDetailsPage from "../ItemDetailsPage/ItemDetailsPage";
import EditItemPage from "../EditItemPage/EditItemPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import SearchResultsPage from "../SearchResultsPage/SearchResultsPage";
import Footer from "../../components/Footer/Footer";
import { getBusinessUser } from "../../utilities/businessUser-api";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import CartPage from "../CartPage/CartPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [businessUser, setBusinessUser] = useState({});
  const [cart, setCart] = useState({});

  useEffect(() => {
    async function logBusinessUser() {
      const businessUser = await getBusinessUser(user?._id);
      setBusinessUser(businessUser);
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
          <NavBar 
            user={user} 
            setUser={setUser} 
            businessUser={businessUser}
            setBusinessUser={setBusinessUser}
            products={products}
            />
          <Routes>
              <Route path="/" element={<HomePage  products={products}/>} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route
                path="/cat/:categoryName" 
                setCategories={setCategories} 
                categoryName={categories.name}  
                element={
                <CategoryPage 
                key={categories.name}
                products={products} 
                categoryName={categories.name}/>} />

              <Route exact path="/item/:category/:id" element={<ItemDetailsPage cart={cart} setCart={setCart} user={user} setUser={setUser}/>} />
              <Route
                path="/search"
                element={<SearchResultsPage products={products} />} />
      
          </Routes>
          {businessUser ? (
            <>
              <Routes>
                <Route
                  path="/edit/:id"
                  element={<EditItemPage products={products} user={user} />}
                />
              }
            />
            <Route
              exact
              path="/item/:category/:id"
              element={<ItemDetailsPage user={user} />}
            />
            <Route
              path="/search"
              element={<SearchResultsPage products={products} />}
            />
            <Route path="/" element={<HomePage products={products} />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route
              path="/cat/:categoryName"
              setCategories={setCategories}
              categoryName={categories.name}
              element={
                <CategoryPage
                  key={categories.name}
                  products={products}
                  categoryName={categories.name}

                />
              </Routes>
            </>
          ) : (
            <></>
          )}

          {businessUser ? (
            <>
              <Routes>
                <Route
                  path="/edit/:id"
                  element={<EditItemPage products={products} user={user} />}
                />
              </Routes>
            </>
          ) : (
            <></>
          )}

          {user ? (
            <>
              <Routes>
                <Route
                  path="/profile"
                  element={
                    <ProfilePage
                      user={user}
                      businessUser={businessUser}
                      products={products}
                    />
                  }
                ></Route>
                <Route
                  path="/create"
                  element={<CreateItemPage user={user._id} />}
                />
                <Route
                  path="/cart"
                  element={<NewOrderPage products={products} />}
                />
                <Route
                  path="/orders"
                  element={<OrderHistoryPage products={products} />}
                />
              </Routes>
            </>
          ) : (
            <>
              <>
                <Routes>
                  <Route
                    path="/auth"
                    element={
                      <AuthPage
                        user={user}
                        setUser={setUser}
                        setBusinessUser={setBusinessUser}
                      />
                    }
                  />
                </Routes>
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
