import AddProductForm from '../../components/AddProductForm/AddProductForm';
import { createItem } from "../../utilities/items-api"
import './CreateItemPage.css'


export default function CreateItemPage({user}) {
    
    async function addProduct(product){
        await createItem(product)
    };

    return (
        <>
        <h1>Add Product</h1>
        <div className="add-form">
        <AddProductForm user={user} addProduct={addProduct}/>
        </div>
        </>
    );
}