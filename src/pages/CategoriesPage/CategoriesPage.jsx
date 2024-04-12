import React from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";
// import CategoryCard from '../components/CategoryCard';

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
            <h1>All Categories</h1>
            <div className="categoriesPage">
                {categories.map(c => (
                    <Link to="">
                    <CategoryCard
                        name={c.name}
                        />
                        </Link>
                ))}
            </div>
            
        
        </>
    );
}