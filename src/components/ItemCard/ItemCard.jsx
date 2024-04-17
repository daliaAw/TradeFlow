import React from "react";
import './ItemCard.css'
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ItemCard({item, category, wholesalePrice, retailPrice, qtyAvailable, minQuantity, delivery, id, index}){

    return (
        <>
        <div className="card item-card">
        <Link to={`/item/${item.category}/${item._id}`} className="card-link">
        <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <img src="/img/Mackbook2.jpg" className="card-img-top" alt="Image" />
                <p>See all details</p>
                {/* <p className="card-text">${item.wholesalePrice}</p> */}
            </div>
        </Link>
    </div>
            </>
        )
}