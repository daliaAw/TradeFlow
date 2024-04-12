import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ name }) {
  return (
    <div className="p-4">
      <Link to={`${name}`} className="card">      
      <h3 className="card">{name}</h3>
      </Link>
    </div>
  );
}

export default CategoryCard;
