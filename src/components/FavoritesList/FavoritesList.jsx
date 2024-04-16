import React from "react";

export default function FavoritesList({ favorites }) {
  return (
    <div>
      <h2>Favorites:</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite._id}</li>
        ))}
      </ul>
    </div>
  );
}


