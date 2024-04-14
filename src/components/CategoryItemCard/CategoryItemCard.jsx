import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItemCard.css"

export default function CategoryItemCard({ title, category, wholesalePrice, retailPrice, qtyAvailable, minQuantity, delivery, id, index}){

    return (
        <>
        <div className="cat-item-card-container">
                <Link to={`/item/${category}/${id}`}>
                    <div className="cat-item-card">
                        <p>{title}</p>
                        <p>${wholesalePrice}</p>
                    </div>
                </Link>
                        <button>Add to Cart</button>
        </div>
        </>
    )
}