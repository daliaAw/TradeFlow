import React, { useState, useEffect } from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import { getFavorites } from "../../utilities/favorites-api";

function ProfilePage({ user, businessUser }) {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    async function fetchFavs() {
      try {
        const favs = await getFavorites();
        setFavorites(favs);
        console.log(favs);
      } catch (err) {
        console.error('Error fetching favorites:', err);
      }
    }
    fetchFavs();
  }, []);

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
        </>
      ) : (
        <>
          <div className="profilePage">
            <p>The is NOT a business page</p>
            <p className="userEmail">{user && user.email}</p>
            <FavoritesList favorites={favorites} />
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