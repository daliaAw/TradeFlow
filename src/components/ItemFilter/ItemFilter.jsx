import React from "react";
import { useState } from "react";
import CategoryItemCard from "../../components/CategoryItemCard/CategoryItemCard"

function ItemFilter({items}) {
  const [selection, setSelection] = useState({
    delivery: '',
    wholesalePrice: '',
    minPrice: '',
    maxPrice: '',
    rating: '',
  })

  function filterDelivery() {
    items.filter(items => items.delivery === selection.delivery).map((p, idx) => (
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
    ));;
  }

  function filterPriceRange() {
    items.filter(items => {
        let minPrice, maxPrice;
        switch (selection.wholesalePrice) {
          case "<25":
            maxPrice = 25;
            return items.wholesalePrice <= maxPrice;
          case "25-50":
            minPrice = 25;
            maxPrice = 50;
            return items.wholesalePrice >= minPrice && items.wholesalePrice <= maxPrice;
          case "50-100":
            minPrice = 50;
            maxPrice = 100;
            return items.wholesalePrice >= minPrice && items.wholesalePrice <= maxPrice;
          case "100-200":
            minPrice = 100;
            maxPrice = 200;
            return items.wholesalePrice >= minPrice && items.wholesalePrice <= maxPrice;
          case "200+":
            minPrice = 200;
            return items.wholesalePrice >= minPrice;
        }
      }).map((p, idx) => (
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
  }

  function handleChange(e){
    setSelection({...selection, [e.target.name]: e.target.value})
    filterDelivery();
    filterPriceRange();
  }

  function filterMinPrice(){
    const minPrice = parseInt(selection.minPrice)
    if (items.wholesalePrice >= minPrice){
      return true
    }
  }
  
  function filterMaxPrice(){
    const maxPrice = parseInt(selection.maxPrice)
    if (items.wholesalePrice <= maxPrice){
      return true
    }
  }
  
  function handlePriceFilter(){
    filterMinPrice();
    filterMaxPrice();
  }


  return (
  <>
  <div className="item-filter">
    <form onChange={handleChange}>
      <div className="delivery-filter">
      <label htmlFor="">Delivery</label>
      <input type="radio" name="delivery" value={"1 day"} /> 1 Day <br />
      <input type="radio" name="delivery" value={"3 day"} /> 3 Days <br />
      <input type="radio" name="delivery" value={"7 day"}  /> 7 Days <br />
      <input type="radio" name="delivery" value={"more"} /> 7 Days + <br />
      </div>
       <br />
      <div className="price-filter">
      <label htmlFor="">Price</label>
      <input type="radio" name="wholesalePrice" value={"<25"}/> Under $25 <br />
      <input type="radio" name="wholesalePrice" value={"25-50"} /> $25 - $50 <br />
      <input type="radio" name="wholesalePrice" value={"50-100"} /> $50 - $100 <br />
      <input type="radio" name="wholesalePrice" value={"100-200"} /> $100 - $200 <br />
      <input type="radio" name="wholesalePrice" value={"200+"} /> $200 & Above  <br />
      </div>
      <br />
      <div className="min-max-price">
        <input type="text" name="minPrice" placeholder="min" />
        <input type="text" name="maxPrice" placeholder="max"  />
        <button onClick={handlePriceFilter}>Filter</button>
      </div>
      <br />
      <div className="rating-filter">
      <label htmlFor="">Rating</label>
      <input type="radio" name="rating" value={"4"} /> ⭐⭐⭐⭐☆ & Up<br />
      <input type="radio" name="rating" value={"3"} /> ⭐⭐⭐☆☆ & Up<br />
      <input type="radio" name="rating" value={"2"} /> ⭐⭐☆☆☆ & Up <br />
      <input type="radio" name="rating" value={"1"} /> ⭐☆☆☆☆ & Up <br />
      <button type="submit">Go</button> 
      <br />
      <button onClick={setSelection}>Clear Filters</button>
      </div>
    </form>
  </div>
  </>
  )
}

export default ItemFilter;