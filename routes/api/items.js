const express = require("express");
const router = express.Router();
const itemsCtrl = require("../../controllers/api/items");
const reviewsCtrl = require("../../controllers/api/items");
const ensureLoggedIn = require("../../config/ensureLoggedIn");
const Item = require("../../models/item");

router.get("/", itemsCtrl.getHomePageItems, ensureLoggedIn);

router.get("/items", itemsCtrl.getItems, ensureLoggedIn);

router.post("/new", itemsCtrl.create, ensureLoggedIn);

router.get("/items", itemsCtrl.getItems, ensureLoggedIn);

router.post("/new", itemsCtrl.create, ensureLoggedIn);

router.get("/reviews", reviewsCtrl.getReviewsByUser);
router.post("/createReview/:id", reviewsCtrl.createReview, ensureLoggedIn);

// GET single item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
