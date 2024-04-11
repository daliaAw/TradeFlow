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



    let { categoryName } = useParams();

    return (
        <>
        <h1>{categoryName}</h1>
        <div className="item-list">
            {/* {items.map((item) => ( */}
            {/* <ItemCard key={item._id} product={item}/> */}
            {/* ))} */}
            <ItemCard products={products}/>
        </div>
        </>
    );
}