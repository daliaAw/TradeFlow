import AddProductForm from '../../components/AddProductForm/AddProductForm';
import { createItem } from "../../utilities/items-api"


export default function CreateItemPage() {
    async function addProduct(product){
        await createItem(product)
    };

    return (
        <>
        <h1>Add Product</h1>
        <AddProductForm addProduct={addProduct}/>
        </>
    );
}