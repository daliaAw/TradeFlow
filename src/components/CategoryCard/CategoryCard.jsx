import React from "react";

function CategoryCard({ name }) {
  return (
    <div className="p-4">
      <h3 className="card">{name}</h3>
    </div>
  );
}

export default CategoryCard;
