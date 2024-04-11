import React from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { item } from "../../models/item";

export default function ItemCard({title, category, wholesalePrice, retailPrice, qtyAvailable, minQuantity, delivery, id, index}){
    // let { categoryName } = useParams();

    return (
        <>
        <div className="item-card-container">
            <div>
                <Link to={`/${category}/${id}`}>
                    <div className="item-card">
                        <p>{title}</p>
                        <p>${wholesalePrice}</p>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}