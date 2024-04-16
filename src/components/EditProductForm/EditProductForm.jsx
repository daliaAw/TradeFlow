import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProductForm = ({editProduct, user, item}) => {

  const [editItem, setEditItem] = useState({
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
    setEditItem({...editItem, [e.target.name]: e.target.value})
  }

    const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(item._id)
    editProduct({...editItem, id: item._id})
    setEditItem({
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
    navigate('/profile')
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit} user={user}>
      <div>
        <label>Select category for your product:</label>
        <select name='category' value={editItem.category} onChange={handleChange}>
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
        <select name='delivery' value={editItem.delivery} onChange={handleChange}>
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
        <input type="number" name='retailPrice' value={editItem.retailPrice} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Wholesale Price:</label>
        <input type="number" name='wholesalePrice' value={editItem.wholesalePrice} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Title:</label>
        <input type="text" name='title' value={editItem.title} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Quantity:</label>
        <input type="number" name='qtyAvailable' value={editItem.qtyAvailable} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Minimum Order Quantity:</label>
        <input type="number" name='minQuantity' value={editItem.minQuantity} onChange={handleChange} />
      </div>
      <br />
      <div>
        <label>Description:</label>
        <textarea rows='3' cols='30' name='description' value={editItem.description} onChange={handleChange} />
      </div>
      <button type="submit">Submit Changes</button>
    </form>
  );
};

export default EditProductForm;