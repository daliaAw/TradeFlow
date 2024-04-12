import { useParams } from "react-router-dom";
import CategoryItemCard from "../../components/CategoryItemCard/CategoryItemCard"
import { display } from "../../utilities/items-api"
import { useState, useEffect } from "react";
import ItemFilter from "../../components/ItemFilter/ItemFilter";

export default function CategoryPage() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        async function getItems() {
            try {
                const items = await display();
                setItems(items);
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        }
        getItems();
    }, []);
    
    let { categoryName } = useParams();

    const productListItems = items
      .filter(items => items.category === categoryName)
      .map((p, idx) => (
        <CategoryItemCard 
          title={p.title} 
          description={p.description} 
          category={p.category} 
          wholesalePrice={p.wholesalePrice}  
          retailPrice={p.retailPrice}  
          qtyAvailable={p.qtyAvailable}  
          minQuantity={p.minQuantity}  
          delivery={p.delivery}
          id={p._id}  
          key={idx} 
          index={idx}
        />
      ));



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
        <ItemFilter/>
        </>
    );
}