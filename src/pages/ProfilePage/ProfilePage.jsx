import React from "react";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
function ProfilePage({ user, businessUser }) {
  return (
    <>
      <h1>{user.name}'s Profile</h1>
      {user.isBusiness ? (
        <>
          <h1>This is the business page</h1>

          <p>{user.email}</p>
        </>
      ) : (
        <>
          <p>The is NOT a business page</p>
          <p>{user.email}</p>
          <FavoritesList />
          <OrderHistory />
        </>
      )}
    </>
  );
}

export default ProfilePage;
