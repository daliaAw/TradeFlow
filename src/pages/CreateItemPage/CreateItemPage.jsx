import AddProductForm from '../../components/AddProductForm/AddProductForm';
import { createItem, index } from "../../utilities/items-api"
import { useEffect, useState } from 'react';


export default function CreateItemPage() {
    const [products, setProducts] = useState([]);
    async function addProduct(product){
        await createItem(product)
    };
    useEffect(function(){
        async function getProducts(){
            const products = await index()
            setProducts(products)
            console.log(products)
        }
        getProducts()
    }, []);
    return (
        <>
        <h1>Add Product</h1>
        <AddProductForm addProduct={addProduct} products={products}/>
        </>
    );
}