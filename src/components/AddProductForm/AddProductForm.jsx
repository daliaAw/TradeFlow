import React, { useState } from 'react';

const AddProductForm = ({addProduct, user}) => {
  const [newItem, setNewItem] = useState({
    category: '',
    delivery: '',
    retailPrice: '',
    wholesalePrice: '',
    title: '',
    qtyAvailable: '',
    minQuantity: '',
    description: '',
    createdBy: user,
  })
  function handleChange(e){
    setNewItem({...newItem, [e.target.name]: e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(newItem)
    setNewItem({
      category: '',
      delivery: '',
      retailPrice: '',
      wholesalePrice: '',
      title: '',
      qtyAvailable: '',
      minQuantity: '',
      description: '',
      createdBy: user,
    })
    
  };

  return (
    <form onSubmit={handleSubmit} user={user}>
      <div>
        <label>Select category for your product:</label>
        <select name='category' value={newItem.category} onChange={handleChange}>
          <option value="" disabled selected>Select category...</option>
          <option value={"Consumer Goods"}>Consumer Goods</option>
          <option value={"Technology and Electronics"}>Technology and Electronics</option>
          <option value={"Fashion and Apparel"}>Fashion and Apparel</option>
          <option value={"Home and Garden"}>Home and Garden</option>
          <option value={"Health and Wellness"}>Health and Wellness</option>
        </select>
      </div>
      <br />
      <div>
        <label>Delivery:</label>
        <select name='delivery' value={newItem.delivery} onChange={handleChange}>
          <option value="" disabled selected>Select delivery...</option>
          <option value={"1 day"}>1 day</option>
          <option value={"3 days"}>3 days</option>
          <option value={"7 days"}>7 days</option>
          <option value={"more"}>More than 7 days</option>
        </select>
      </div>
      <br />
      <div>
        <label>Retail Price:</label>
        <input type="number" name='retailPrice' value={newItem.retailPrice} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Wholesale Price:</label>
        <input type="number" name='wholesalePrice' value={newItem.wholesalePrice} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Title:</label>
        <input type="text" name='title' value={newItem.title} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Quantity:</label>
        <input type="number" name='qtyAvailable' value={newItem.qtyAvailable} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Minimum Order Quantity:</label>
        <input type="number" name='minQuantity' value={newItem.minQuantity} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Description:</label>
        <textarea rows='3' cols='30' name='description' value={newItem.description} onChange={handleChange} />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default AddProductForm;