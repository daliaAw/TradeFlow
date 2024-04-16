const Item = require("../../models/item");

module.exports = {
  getItems,
  getHomePageItems,
  create,
  getItemDetails,
  itemDelete,
  itemUpdate,
  createReview,
  getReviewsByUser,
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
async function getItemDetails(req, res) {
  const getItems = await Item.find();
  res.json(getItems);
}

async function createReview(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    const review = {
      rating: req.body.rating,
      comment: req.body.comment,
      user: req.user._id,
      name: req.user.name,
    };
    console.log("USER REVIEW: ", review);
    item.reviews.push(review);
    await item.save();
    res.json(review);
  } catch (err) {
    console.log(err);
  }
}

async function getReviewsByUser(req, res) {
  try {
    const reviews = await Review.find({ user: req.user });
    res.json(reviews);
  } catch (err) {
    console.log(err);
  }
}
