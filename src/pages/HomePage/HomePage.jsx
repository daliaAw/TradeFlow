import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import { index } from "../../utilities/items-api"
import "./HomePage.css"
    
export default function HomePage() {
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await index()
                setCategoryItems(res);
            } catch (err) {
                console.log(err)
            }
        }
        fetchItems();
    }, []);

    return (
        <div className="home-page-container">
            <Link to="/categories" className="see-all">See All Categories</Link>
            <div className="cat-preview-container">

            {categoryItems.map((category) => (
               
                <div className="cat-preview" key={category.category}>
                    <h2>{category.category}</h2>
                    <div className="itemsInCat">
                        {category.items.slice(0, 3).map((item) => (
                            <ItemCard key={item._id} item={item} />
                            ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}