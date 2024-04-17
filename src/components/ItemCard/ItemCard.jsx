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
            <div className="card-content">
                <h5 className="card-title">{item.title.length <= 24 ? item.title : item.title.substring(0, 24) + '...'}</h5>
                <p className="card-text">See all details</p>
            </div>
            <div className="card-image-container">
                <img src="https://picsum.photos/200/200" className="card-img-top" alt="Image" />
                <div className="overlay"></div>
            </div>
            </div>
        </Link>
        </div>


            </>
        )
}