const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/new', itemsCtrl.create, ensureLoggedIn)
router.get('/', itemsCtrl.getItemDetails, ensureLoggedIn)

module.exports = router;