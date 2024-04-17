const Order = require('../../models/order');

module.exports = {
  setItemQtyInCart,
  checkout,
  addToCart,
  getCart
  };
  

  async function getCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    console.log('cart controller', cart)
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
  

  async function addToCart (req, res) {
    const cart = await Order.getCart(req.user._id);
    console.log('cart:', cart)
    await cart.addItemToCart(req.params.id);
  res.json(cart);
    
  }

  // async function getCartItems(req, res) {
  //   try {
  //     const userId = req.params.userId; // Assuming userId is passed as a URL parameter
  //     const cart = await Cart.findOne({ user: userId }).populate('items');
      
  //     if (!cart) {
  //       return res.status(404).json({ error: 'Cart not found' });
  //     }
  
  //     res.status(200).json({ items: cart.items });
  //   } catch (error) {
  //     console.error('Error fetching cart items:', error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // }
  