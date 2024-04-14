import React from "react";
import "./CategoryCard.css"

function CategoryCard({ name }) {
  return (
    <div className="category-card-container">
      <h3 className="category-card">{name}</h3>
    </div>
  );
}

export default CategoryCard;
