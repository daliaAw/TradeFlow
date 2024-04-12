import React from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { item } from "../../models/item";

export default function ItemCard({item, category, wholesalePrice, retailPrice, qtyAvailable, minQuantity, delivery, id, index}){
    // let { categoryName } = useParams();

    return (
        <>
        <div className="item-card-container">
            <div>
                <Link to={`/${category}/${id}`}>
                    <div className="item-card">
                        {console.log(item)}
                        <h3>{item.title}</h3>
                        <h3>${item.wholesalePrice}</h3> 

                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}