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
  }, [categoryName]); // Reload when category name changes

  useEffect(() => {
    applyFilters(items); // Apply filters whenever items or selection changes
  }, [items, selection]);

  function applyFilters(itemsToFilter) {
    let filteredItems = itemsToFilter.filter((item) => {
      if (item.category !== categoryName) return false;
      if (selection.delivery && item.delivery !== selection.delivery)
        return false;
      if (selection.wholesalePrice) {
        const [min, max] = selection.wholesalePrice.split("-");
        if (min && parseInt(item.wholesalePrice) < parseInt(min)) return false;
        if (max && parseInt(item.wholesalePrice) > parseInt(max)) return false;
      }
      return true;
    });
    setDisplayedItems(filteredItems);
  }

  function handleChange(e) {
    setSelection({ ...selection, [e.target.name]: e.target.value });
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
        <div>no products</div>
      )}
      <ItemFilter
        handleChange={handleChange}
        selection={selection}
        setSelection={setSelection}
      />
    </>
  );
}