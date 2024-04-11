import React from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { item } from "../../models/item";

export default function ItemCard({item}){
    let { categoryName } = useParams();

    return (
        <>
        <div className="item-card-container">
            <div>
                {/* <Link to={`categories/${item.category}/${item._id}`}> */}
                    <div className="item-card">
                        <p>{categoryName} item</p>
                        {/* <p>{item} item</p> */}
                        {/* <h3>{item.name}</h3>
                        <h3>{item.wholesalePrice}</h3> */}
                    </div>
                {/* </Link> */}
            </div>
        </div>
        </>
    )
}