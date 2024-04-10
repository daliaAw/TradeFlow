import React from "react";
import { Link } from "react-router-dom";
// import { item } from "../../models/item";

export default function ItemCard({item}){
    return (
        <>
        <div className="item-card-container">
            <div key={item.name}>
                <Link to={`categories/${item.category}/${item._id}`}>
                    <div className="item-card">
                        <h3>{item.name}</h3>
                        <h3>{item.wholesalePrice}</h3>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}