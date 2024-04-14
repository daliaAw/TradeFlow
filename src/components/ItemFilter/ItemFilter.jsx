import React from "react";
import "./ItemFilter.css"

function ItemFilter({items, handleChange, selection, setSelection, handlePriceFilter}) {

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
        <button onClick={handlePriceFilter}>Reset Filter</button>
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