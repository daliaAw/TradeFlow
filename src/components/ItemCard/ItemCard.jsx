import React from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ItemCard({item, category, wholesalePrice, retailPrice, qtyAvailable, minQuantity, delivery, id, index}){

    return (
        <>
        <div className="item-card-container">
            
                <Link to={`/item/${item.category}/${item._id}`}>
                    <div className="item-card">
                        {/* {console.log(item)} */}
                        <h3>{item.title}</h3>
                        <h3>${item.wholesalePrice}</h3> 

                    </div>
                </Link>
            
        </div>
        </>
    )
}