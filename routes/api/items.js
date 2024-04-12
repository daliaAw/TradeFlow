const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/', itemsCtrl.getHomePageItems, ensureLoggedIn);

router.get('/items', itemsCtrl.getItems, ensureLoggedIn)
  
router.post('/new', itemsCtrl.create, ensureLoggedIn)

module.exports = router;
