import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import { deleteItem } from "../../utilities/items-api"
import EditItemPage from "../EditItemPage/EditItemPage";
import "../App/App.css";


function ProfilePage({ user, businessUser, products }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setAllProducts(products);
  }, [products]);
  
  
  const navigate = useNavigate()

  async function handleDelete(productId){
    try {
      await deleteItem(productId);
      setAllProducts(allProducts.filter(product => product._id !== productId));
      navigate("/profile")
    }
    catch (error){
      console.log(error);
    }
  }

  return (
    <>
      <h1>{user && user.name}'s Profile</h1>
      {user && user.isBusiness ? (
        <>
          <div className="businessInfo">
            <h1>This is the business page</h1>
            <h2 className="businessName">{businessUser.businessName}</h2>
            <p className="businessPhone">{businessUser.businessPhone}</p>
            <p className="businessAddress">{businessUser.businessAddress}</p>
            <p className="userEmail">{user.email}</p>
          </div>
          <hr />
          <div className="posted-items-array">
            <h3>Products</h3>

            {allProducts.map(product => {
              if (product.createdBy === user._id) {

                return (
                  <div className="posted-item" key={product._id} id={product._id}>
                    <hr />

                    <Link to={`/item/${product.category}/${product._id}`}>
                      <p>{product.title}</p>
                    </Link>

                    <Link to={`/edit/${product._id}`} component={<EditItemPage product={product} />} >
                      <button >Edit</button>
                    </Link>

                    <button key={product._id} id={product._id} onClick={() => handleDelete(product._id)}>Delete</button>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </>
      ) : (
        <>
          <div className="profilePage">
            <p>The is NOT a business page</p>
            <p className="userEmail">{user && user.email}</p>
            <div className="profileFavs">
              <FavoritesList />
            </div>
            <div className="profileOrderHistory">
              <OrderHistory />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProfilePage;
