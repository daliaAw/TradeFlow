import React from "react";

function ItemFilter() {
  return (
  <>
  <div className="item-filter">
    <form action="">
      <div className="delivery-filter">
      <label htmlFor="">Delivery</label>
      <input type="radio" name="delivery" />1 Day <br />
      <input type="radio" name="delivery" />3 Days <br />
      <input type="radio" name="delivery" />7 Days <br />
      <input type="radio" name="delivery" />7 Days + <br />
      </div>
       <br />
      <div className="price-filter">
      <label htmlFor="">Price</label>
      <input type="radio" name="wholesalePrice" />Under $25 <br />
      <input type="radio" name="wholesalePrice" />$25 - $50 <br />
      <input type="radio" name="wholesalePrice" />$25 - $50 <br />
      <input type="radio" name="wholesalePrice" />$25 - $50 <br />
      <input type="radio" name="wholesalePrice" />$200 & Above  <br />
      </div>
      <br />
      <div className="min-max-price">
        <input type="text" placeholder="min" />
        <input type="text" placeholder="max" />
        <button>Filter</button>
      </div>
      <br />
      <div className="rating-filter">
      <label htmlFor="">Rating</label>
      <input type="radio" name="wholesalePrice" />⭐⭐⭐⭐☆ & Up<br />
      <input type="radio" name="wholesalePrice" />⭐⭐⭐☆☆ & Up<br />
      <input type="radio" name="wholesalePrice" />⭐⭐☆☆☆ & Up <br />
      <input type="radio" name="wholesalePrice" />⭐☆☆☆☆ & Up <br />
      <button>Go</button> 
      <br />
      <button>Clear Filters</button>
      </div>
    </form>
  </div>
  </>
  )
}

export default ItemFilter;
