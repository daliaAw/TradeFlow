const Item = require("../../models/item");

module.exports = {
  getItems,
  getHomePageItems,
  create,
  itemDelete,
  itemUpdate,
  createReview,
  getReviews,
};

async function create(req, res) {
  try {
    const createItem = await Item.create({ ...req.body, user: req.user._id });
    res.json(createItem);
  } catch (error) {
    console.log(error);
  }
}

async function itemDelete(req, res) {
  try {
    const deleteItem = await Item.findByIdAndDelete(req.params.id);
    res.json(deleteItem);
  } catch (error) {
    console.log(error);
  }
}

async function itemUpdate(req, res) {
  try {
    const updateItem = await Item.findByIdAndUpdate(req.params.id, req.body);
    res.json(updateItem);
  } catch (err) {
    console.log(err);
  }
}

async function getItems(req, res, next) {
  try {
    const getItems = await Item.find();
    res.json(getItems);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getHomePageItems(req, res) {
  const homeCategories = [
    "Technology and Electronics",
    "Fashion and Apparel",
    "Health and Wellness",
  ];
  const categoryItems = [];

  try {
    for (const category of homeCategories) {
      const items = await Item.find({ category: category });
      categoryItems.push({ category: category, items: [...items] });
    }
    res.json(categoryItems);
  } catch (err) {
    console.log(err);
  }
}

async function createReview(req, res) {
  try {
    const itemId = req.params.itemId;
    const userId = req.body.userId;
    const item = await Item.findById(itemId);

    const reviewData = {
      rating: req.body.rating,
      comment: req.body.comment,
      user: userId,
    };
    const review = await Item.create(reviewData);
    item.reviews.push(review);
    await item.save();
    json(review);
  } catch (err) {
    console.log("Error creating review:", err);
  }
}

async function getReviews(req, res) {
  try {
    const itemsWithReviews = await Item.find().populate("reviews.user", "name");
    console.log(itemsWithReviews);
    res.json(itemsWithReviews.map((item) => item.reviews));
  } catch (err) {
    console.log("getReviews Error: ", err);
  }
}