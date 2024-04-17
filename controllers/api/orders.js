const Order = require('../../models/order');

module.exports = {
  getCart,
  addToCart,
  setItemQtyInCart,
  checkout,
  removeCartItem
  };

  async function getCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    console.log('cart controller', cart)
    res.json(cart);
  }

  
  async function addToCart (req, res) {
    const cart = await Order.getCart(req.user._id);
    console.log('cart:', cart)
    await cart.addItemToCart(req.params.id);
  res.json(cart);
    
  }

  async function setItemQtyInCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.json(cart);
  }
  
  async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
  }
  

  async function removeCartItem(req, res) {
    try {
      const itemId = req.params.itemId;
      // Call a method on your Order model to remove the item from the cart
      await Order.removeCartItem(itemId);
      res.sendStatus(204); // No Content
    } catch (error) {
      console.error('Error removing item from cart:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };