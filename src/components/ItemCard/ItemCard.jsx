import React from "react";
import './ItemCard.css'
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ItemCard.css"

export default function ItemCard({ item, imageUrl }) {
    return (
        <div className="card item-card">
            <Link to={`/item/${item.category}/${item._id}`} className="card-link">
                <div className="card-body">
                    <div className="card-content">
                        <h5 className="card-title">{item.title.length <= 24 ? item.title : item.title.substring(0, 24) + '...'}</h5>
                    </div>
                    <div className="card-image-container">
                        {/* Use the imageUrl prop to dynamically set the src attribute */}
                        <img src={process.env.PUBLIC_URL + imageUrl} className="card-img-top" alt="Image" />
                        <div className="overlay"></div>
                        <p className="card-text">See all details</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}