const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get('/cart', ordersCtrl.getCart);
router.post('/cart/checkout', ordersCtrl.checkout);
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
router.post('/cart/items/:id', ensureLoggedIn, ordersCtrl.addToCart);

router.delete('/cart/remove/:itemId',ensureLoggedIn, ordersCtrl.removeCartItem);

module.exports = router;