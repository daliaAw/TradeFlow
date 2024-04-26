import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import blank_heart from "./blank_heart_icon.png"
import heart from "./heart_icon.png"
import "./CategoryItemCard.css"

export default function CategoryItemCard({ title, category, description, wholesalePrice, retailPrice, qtyAvailable, minQuantity, delivery, id, index }) {
    const [favorite, setFavorite] = useState(false)

    function handleFavorite() {
        setFavorite(!favorite)
        // Logic to push into favorites array
    }

    return (
        <>
            <div className="cat-item-card-container">
                <div className="cat-card-top-row">
                <img className="col-md-4" src="https://picsum.photos/200/200" alt="Card image cap" />

                    <div className="card-heart-container" onClick={handleFavorite}>
                        <Link to={`/item/${category}/${id}`}>
                            <div className="cat-item-card">
                            </div>
                        </Link>
                        {favorite ? (
                            <img src={heart} alt="" />
                        ) : (
                            <img src={blank_heart} alt="" />
                        )}
                    </div>
                </div>

                <Link to={`/item/${category}/${id}`}>
                    <div className="card-details">

                        <h5>{title.length <= 24 ? title : title.substring(0, 24) + '...'}</h5>

                        <p>${wholesalePrice.toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="cat-card-description">
                        <p><small>{description.length <= 60 ? description : description.substring(0, 60) + '...'}</small></p>
                    </div>
                </Link>

                <button className="card-button">Add to Cart</button>
            </div>
        </>
    )
}