import React from "react";
import { useState } from "react";

function ItemFilter({items}) {
  const [selection, setSelection] = useState({
    delivery: '',
    wholesalePrice: '',
    minPrice: '',
    maxPrice: '',
    rating: '',
  })

  function filterDelivery() {  
    if (selection.delivery === items.delivery){
      items.map()
    }}

  function filterPriceRange(){
    if (selection.wholesalePrice === "<25"){
      const maxPrice = 25
      if (items.wholesalePrice < maxPrice){
        return
      }
    }
    if (selection.wholesalePrice === "25-50"){
      const minPrice = 25;
      const maxPrice = 50;
      if (items.wholesalePrice < maxPrice && items.wholesalePrice > minPrice){
        return
      }
    }
    if (selection.wholesalePrice === "50-100"){
      const minPrice = 50;
      const maxPrice = 100;
      if (items.wholesalePrice < maxPrice && items.wholesalePrice > minPrice){
        return
      }
    }
    if (selection.wholesalePrice === "100-200"){
      const minPrice = 100;
      const maxPrice = 200;
      if (items.wholesalePrice < maxPrice && items.wholesalePrice > minPrice){
        return
      }
    }
    if (selection.wholesalePrice === "200+"){
      const minPrice = 200;
      if (items.wholesalePrice > minPrice){
        return
      }
    }
  }

  function filterMinPrice(){
    const minPrice = parseInt(selection.minPrice)
    if (items.wholesalePrice > minPrice){
      return
    }
  }
  
  function filterMaxPrice(){
    const maxPrice = parseInt(selection.maxPrice)
    if (items.wholesalePrice < maxPrice){
      return
    }
  }
  
  function handleChange(e){
    setSelection({...selection, [e.target.name]: e.target.value})
    filterDelivery();
    filterPriceRange();
    filterMinPrice();
    filterMaxPrice();
  }


  return (
  <>
  <div className="item-filter">
    <form onChange={handleChange}>
      <div className="delivery-filter">
      <label htmlFor="">Delivery</label>
      <input type="radio" name="delivery" value={"1 day"} />1 Day <br />
      <input type="radio" name="delivery" value={"3 day"} />3 Days <br />
      <input type="radio" name="delivery" value={"7 day"}  />7 Days <br />
      <input type="radio" name="delivery" value={"more"} />7 Days + <br />
      </div>
       <br />
      <div className="price-filter">
      <label htmlFor="">Price</label>
      <input type="radio" name="wholesalePrice" value={"<25"}/>Under $25 <br />
      <input type="radio" name="wholesalePrice" value={"25-50"} />$25 - $50 <br />
      <input type="radio" name="wholesalePrice" value={"50-100"} />$50 - $100 <br />
      <input type="radio" name="wholesalePrice" value={"100-200"} />$100 - $200 <br />
      <input type="radio" name="wholesalePrice" value={"200+"} />$200 & Above  <br />
      </div>
      <br />
      <div className="min-max-price">
        <input type="text" name="minPrice" placeholder="min" />
        <input type="text" name="maxPrice" placeholder="max"  />
        <button>Filter</button>
      </div>
      <br />
      <div className="rating-filter">
      <label htmlFor="">Rating</label>
      <input type="radio" name="rating" value={"4"} />⭐⭐⭐⭐☆ & Up<br />
      <input type="radio" name="rating" value={"3"} />⭐⭐⭐☆☆ & Up<br />
      <input type="radio" name="rating" value={"2"} />⭐⭐☆☆☆ & Up <br />
      <input type="radio" name="rating" value={"1"} />⭐☆☆☆☆ & Up <br />
      <button type="submit">Go</button> 
      <br />
      <button>Clear Filters</button>
      </div>
    </form>
  </div>
  </>
  )
}

export default ItemFilter;
