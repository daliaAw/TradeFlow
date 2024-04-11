import { useParams } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard"
import { index } from "../../utilities/items-api"
import { useState, useEffect } from "react";

export default function CategoryPage() {
    const [products, setProducts] = useState([]);
    useEffect(function(){
        async function getProducts(){
            const products = await index()
            setProducts(products)
        }
        getProducts()
    }, []);

    const productListItems = products.map((p, idx) => (
        <ItemCard product={p} key={idx}/>
    ))


    let { categoryName } = useParams();

    return (
        <>
        <h1>{categoryName}</h1>
        {productListItems.length ?
        (
        <ul>{productListItems}</ul>
        ) : ( 
        <div>no products</div>
        )
    }
        </>
    );
}