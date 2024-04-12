import React from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
function ProfilePage({ user, businessUser }) {
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
