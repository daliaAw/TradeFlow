import React from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";
import "./CategoriesPage.css"

const categories = [
    { name: 'Consumer Goods'
    },
    { name: 'Technology and Electronics'
    },
    { name: 'Fashion and Apparel'
    },
    { name: 'Home and Garden'
    },
    { name: 'Health and Wellness'
    }
]

export default function CategoriesPage() {
    return (
        <>
             <h1 className="pt-5">All Categories</h1>
    <div className="categoriesPage">
        <div className="categoryList">
            {categories.slice(0, 5).map(c => (
                <Link to={`/cat/${c.name}`} key={c.id} className="categoryLink">
                    <div className="categoryCard">
                        <h2 className="categoryName">{c.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    </div>
        
        </>
    );
}