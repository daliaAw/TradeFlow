import React from "react";
import { Link, useParams } from "react-router-dom";
// import { item } from "../../models/item";

export default function ItemCard({item}){
    let { categoryName } = useParams();

    return (
        <>
        <div className="item-card-container">
            <div>
                {/* <Link to={`categories/${item.category}/${item._id}`}> */}
                    <div className="item-card">
                        <h3>{item.title}</h3>
                        <h3>${item.wholesalePrice}</h3> 
                    </div>
                {/* </Link> */}
            </div>
        </div>
        </>
    )
}