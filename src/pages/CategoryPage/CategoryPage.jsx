import { useParams } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard"
import { index } from "../../utilities/items-api"
import { useState, useEffect } from "react";

export default function CategoryPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            try {
                const products = await index();
                setProducts(products);
                const productListItems = products.map((p, idx) => (
                    <ItemCard products={p} key={idx}/>
                ))
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        }
        getProducts();
    }, []);

    // useEffect(function fetchProducts(){
    //     async fucntion fetchProducts(){
    //         try {
    //             const response = await fetch('/api/item');
    //             const items = await response.json();
    //             setProducts(items)
    //         }
    //         catch(err) {
    //             console.log("Error: ", err)
    //         }
    //     }
    // })

    const productListItems = products.map((p, idx) => (
        <ItemCard product={p.title} key={idx} index={idx}/>
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