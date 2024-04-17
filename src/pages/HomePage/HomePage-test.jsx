import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import { index } from "../../utilities/items-api"
import "./HomePage.css";
export default function HomePage() {
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await index()
                // const itemsInCat = await res.json();
                // console.log(itemsInCat)
                setCategoryItems(res);
            } catch (err) {
                console.log(err)
            }
        }
        fetchItems();
    }, []);

    return (
        <div>
            <div className="banner">
            <img src="https://picsum.photos/200/200" alt="Card image cap" />
            </div>
            <Link to="/categories"><h1 className="cat-title">See All Categories</h1></Link>
            {/* {console.log(categoryItems)} */}

            <div className="container-fluid">
            {categoryItems.map((category) => (
                <div className="cat-subtitle" key={category.category}>
                     <h3>{category.category}</h3>
                        {category.items.map((item) => (
                            <ItemCard key={item._id} item={item}  />
                        ))}
                </div>
            ))}
        </div>

        <div className="getStarted">
        <p>Team up with TradeFlow experts and grow your business!  Create your free account to take full advantage of our website features. </p>
            <button>GET STARTED</button>
        </div>
      
        </div>
    );
}