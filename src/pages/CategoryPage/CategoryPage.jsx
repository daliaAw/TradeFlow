import { useParams } from "react-router-dom";
import CategoryItemCard from "../../components/CategoryItemCard/CategoryItemCard";
import { display } from "../../utilities/items-api";
import { useState, useEffect } from "react";
import ItemFilter from "../../components/ItemFilter/ItemFilter";

export default function CategoryPage() {
  const [items, setItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [selection, setSelection] = useState({
    delivery: "",
    wholesalePrice: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
  });
  
  function handleChange(e) {
      setSelection({ ...selection, [e.target.name]: e.target.value });
  }

  const { categoryName } = useParams();

  useEffect(() => {
    async function getItems() {
      try {
        const items = await display();
        setItems(items);
        applyFilters(items);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }
    getItems();
  }, [categoryName]);

  useEffect(() => {
    applyFilters(items); 
  }, [items, selection]);

  function applyFilters(itemsToFilter) {
    let filteredItems = itemsToFilter.filter((item) => {
      if (item.category !== categoryName) return false;
      if (selection.delivery && item.delivery !== selection.delivery)
        return false;
      if (selection.wholesalePrice) {
        if (selection.wholesalePrice === "<25"){
            selection.minPrice = 0
            selection.maxPrice = 25
        }
        if (selection.wholesalePrice === "25-50"){
            selection.minPrice = 25;
            selection.maxPrice = 50;
        }
        if (selection.wholesalePrice === "50-100"){
            selection.minPrice = 50;
            selection.maxPrice = 100;
        }
        if (selection.wholesalePrice === "100-200"){
            selection.minPrice = 100;
            selection.maxPrice = 200;
        }
        if (selection.wholesalePrice === "200+"){
            selection.minPrice = 200;
            selection.maxPrice = 9999999999;
        }
      }
      if (item.wholesalePrice < parseInt(selection.minPrice)) return false;
      if (item.wholesalePrice > parseInt(selection.maxPrice)) return false;
      return true;
    });
    setDisplayedItems(filteredItems);
  }

  return (
    <>
      <h1>{categoryName}</h1>
      {displayedItems.length ? (
        <ul>
          {displayedItems.map((p, idx) => (
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
          ))}
        </ul>
      ) : (
        <div>No Results</div>
      )}
      <ItemFilter
        handleChange={handleChange}
        selection={selection}
        setSelection={setSelection}
      />
    </>
  );
}