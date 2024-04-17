const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/cart', ordersCtrl.getCart);
router.post('/cart/checkout', ordersCtrl.checkout);
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
router.post('/cart/items/:id', ordersCtrl.addToCart);


module.exports = router;