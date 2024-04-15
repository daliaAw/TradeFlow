import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import blank_heart from "./blank_heart_icon.png"
import heart from "./heart_icon.png"
import "./CategoryItemCard.css"

export default function CategoryItemCard({ title, category, description, wholesalePrice, retailPrice, qtyAvailable, minQuantity, delivery, id, index}){
    const [favorite, setFavorite] = useState(false)

    function handleFavorite(){
        setFavorite(!favorite)
        // Logic to push into favorites array
    }

    return (
        <>
        <div className="cat-item-card-container">
            <div className="cat-card-top-row">
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
                    {/* <div className="card-details-title"> */}
                    <h5>{title}</h5>
                    {/* </div> */}

                    {/* <div className="card-details-price"> */}
                    <p> ${wholesalePrice}</p>
                    {/* </div> */}
                </div>
                <hr/>
                <div className="cat-card-description">
                <p><small>{description}</small></p>
                </div>
 
            </Link>
                <button className="card-button">Add to Cart</button>
        </div>
        </>
    )
}