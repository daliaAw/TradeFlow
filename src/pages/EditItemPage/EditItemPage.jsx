import EditProductForm from '../../components/EditProductForm/EditProductForm';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

export default function EditItemPage({product, products}){
    // const [product, setProduct] = useState(null);
    // const { id } = useParams();

    // useEffect(() => {
    //     const foundProduct = products.find(product => product._id === id);
    //     // setProduct(foundProduct);
    // }, [id, products]); 

    // console.log(product)

    function editProduct(){}
    
    return (
        <>
        <h1>Edit Item</h1>
        <EditProductForm product={product} editProduct={editProduct} />
        <h5>Current Details</h5>
        {/* <p>Title : {product.title}</p>
        <p>Category : {product.category}</p>
        <p>Delivery : {product.delivery}</p>
        <p>Retail Price : {product.retailPrice}</p>
        <p>Wholesale Price : {product.wholesalePrice}</p>
        <p>Available Quantity : {product.qtyAvailable}</p>
        <p>Minimum Order Quantity : {product.minQuantity}</p>
        <p>Description : {product.description}</p> */}
        </>
    )
} 