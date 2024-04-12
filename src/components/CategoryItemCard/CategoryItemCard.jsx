import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItemCard({ title, category, wholesalePrice, retailPrice, qtyAvailable, minQuantity, delivery, id, index}){

    return (
        <>
        <div className="item-card-container">
            
                <Link to={`/${category}/${id}`}>
                    <div className="item-card">
                        <h3>{title}</h3>
                        <h3>${wholesalePrice}</h3> 

                    </div>
                </Link>
            
        </div>
        </>
    )
}