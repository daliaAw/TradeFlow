import EditProductForm from '../../components/EditProductForm/EditProductForm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateItem } from "../../utilities/items-api"

export default function EditItemPage({ user }){
    const { id } = useParams();
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      const fetchItem = async () => {
        try {
          const response = await fetch(`/api/items/${id}`); 
          const data = await response.json();
          setItem(data); 
        } catch (error) {
          console.error('Error fetching item data:', error);
        }
      };
  
      fetchItem();
    }, [id]);

    async function editProduct(editItem){
        console.log(editItem, "page component")
        await updateItem(editItem)
    }
    
    return (
        <>
          <h1>Edit Item</h1>
          <EditProductForm item={item} user={user} editProduct={editProduct} />
          {item && (
            <>
            <br />
              <h3>Current Details</h3>
              <p>Category : {item.category}</p>
              <p>Delivery : {item.delivery}</p>
              <p>Retail Price : {item.retailPrice}</p>
              <p>Wholesale Price : {item.wholesalePrice}</p>
              <p>Title : {item.title}</p>
              <p>Available Quantity : {item.qtyAvailable}</p>
              <p>Minimum Order Quantity : {item.minQuantity}</p>
              <p>Description : {item.description}</p>
            </>
          )}
        </>
      );
} 