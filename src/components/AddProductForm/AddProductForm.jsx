import React, { useState } from 'react';

const AddProductForm = () => {
  const [category, setCategory] = useState('');
  const [delivery, setDelivery] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [wholesalePrice, setWholesalePrice] = useState('');
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [minQuantity, setMinQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // For example, you can send form data to the server
    console.log({
      category,
      delivery,
      retailPrice,
      wholesalePrice,
      title,
      quantity,
      minQuantity,
      description
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select category for your product:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled selected>Select category...</option>
          <option value={"Consumer Goods"}>Consumer Goods</option>
          <option value={"Technology and Electronics"}>Technology and Electronics</option>
          <option value={"Fashion and Apparel"}>Fashion and Apparel</option>
          <option value={"Home and Garden"}>Home and Garden</option>
          <option value={"Health and Wellness"}>Health and Wellness</option>
        </select>
      </div>
      <div>
        <label>Delivery:</label>
        <select value={delivery} onChange={(e) => setDelivery(e.target.value)}>
          <option value="" disabled selected>Select delivery...</option>
          <option value={"1 day"}>1 day</option>
          <option value={"3 days"}>3 days</option>
          <option value={"7 days"}>7 days</option>
          <option value={"more"}>More than 7 days</option>
        </select>
      </div>
      <div>
        <label>Retail Price:</label>
        <input type="number" value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} />
      </div>
      <div>
        <label>Wholesale Price:</label>
        <input type="number" value={wholesalePrice} onChange={(e) => setWholesalePrice(e.target.value)} />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <div>
        <label>Minimum Quantity:</label>
        <input type="number" value={minQuantity} onChange={(e) => setMinQuantity(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default AddProductForm;
