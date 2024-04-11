import React from "react";

function ProfilePage({ user }) {
  return (
    <>
      <h1>{user.name}'s Profile</h1>
      {user.isBusiness ? (
        <>
          <h1>This is the business page</h1>
        </>
      ) : (
        <h1>The is NOT a business page</h1>
      )}
    </>
  );
}

export default ProfilePage;
