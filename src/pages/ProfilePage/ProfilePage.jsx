import React from "react";

function ProfilePage() {
  return (
      <>
      <h1>Profile</h1>
      {business ? (
        <>
          <h1>This is the business page</h1>
        </>
      ) : (
        <h1>The is NOT a business page</h1>
      )}
      <div>ProfilePage</div>
    </>
  );
}

export default ProfilePage;
