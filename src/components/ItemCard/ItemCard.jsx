import React from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ItemCard.css"

export default function ItemCard({item, category, wholesalePrice, retailPrice, qtyAvailable, minQuantity, delivery, id, index}){

    return (
        <>
            <Link to={`/item/${item.category}/${item._id}`}>
                <div className="item-card-container">
                    <div className="item-card">
                        {/* {console.log(item)} */}
                        <h5>{item.title}</h5>
                        <h5>${item.wholesalePrice}</h5> 

                    </div>
                </div>
            </Link>
            
        </>
    )
}