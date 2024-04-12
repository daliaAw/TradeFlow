import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({
    title,
    category,
    wholesalePrice,
    retailPrice,
    qtyAvailable,
    minQuantity,
    delivery,
    id,
    index
}) => {
    return (
        <div className="item-card-container">
            <div className="category-card card p-3">
                <Link to={`/item/${category}/${id}`}>
                    <div className="item-card">
                        <p>{title}</p>
                        <p>${wholesalePrice}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ItemCard;
