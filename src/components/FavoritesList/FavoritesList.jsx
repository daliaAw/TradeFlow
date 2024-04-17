import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./FavoritesList.css"

export default function FavoritesList({ favorites }) {
  return (
    <div className="favorites">
      <h2>Favorites:</h2>
      <ul>
        <div className="favItems">
        {favorites.map((favorite) => (
          <li key={favorite._id}><ItemCard key={favorite._id} item={favorite} /></li>
        ))}
        </div>
      </ul>
    </div>
  );
}

