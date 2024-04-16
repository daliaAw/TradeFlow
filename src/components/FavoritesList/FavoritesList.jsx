import React from "react";
import ItemCard from "../ItemCard/ItemCard";

export default function FavoritesList({ favorites }) {
  return (
    <div>
      <h2>Favorites:</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite._id}><ItemCard key={favorite._id} item={favorite} /></li>
        ))}
      </ul>
    </div>
  );
}


