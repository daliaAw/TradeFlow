const Item = require("../../models/item");

module.exports = {
  getItems,
  getHomePageItems,
  create,
  getItemDetails,
  createReview,
  getReviewsByUser,
};

async function create(req, res) {
  try {
    const createItem = await Item.create({ ...req.body, user: req.user._id });
    console.log(Item);
    res.json(createItem);
  } catch (error) {
    console.log(error);
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
    console.log("req.param.id: ", req.params.id);
    const item = await Item.findById(req.params.id);
    console.log("2req.param.id: ", req.params.id);

    console.log("item: ", item);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    const review = {
      rating: req.body.rating,
      comment: req.body.comment,
    };
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
