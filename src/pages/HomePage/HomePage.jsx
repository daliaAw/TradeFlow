import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
    
export default function HomePage() {
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await fetch("/api/items")
                const itemsInCat = await res.json();
                setCategoryItems(itemsInCat);
            } catch (err) {
                console.log(err)
            }
        }
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/categories">See All Categories</Link>
            {console.log(categoryItems)}
            {categoryItems.map((category) => (
                <div key={category.category}>
                    <h2>{category.category}</h2>
                    <div className="itemsInCat">
                        {category.items.map((item) => (
                            <ItemCard key={item._id} item={item} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}