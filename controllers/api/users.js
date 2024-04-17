const Item = require("../../models/item");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

module.exports = {
  create,
  login,
  checkToken,
  addToFavs,
  removeFav,
  getFavorites,
};

function checkToken(req, res) {
  console.log("req.user", req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email }).populate('favorites');
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json("Bad Credentials");
  }
}

async function addToFavs(req, res) {
  console.log('before request', req.user);
  try {
    const user = await User.findById(req.user._id);
    // console.log('after request', user);
    user.favorites.push(req.params.itemId);
    await user.save();
    console.log('after request', user);
    res.status(200).json({ message: 'Item added to favorites' });
  } catch (err) {
    console.error('Error adding item to favorites:', err);
  }
}

async function removeFav(req, res) {
  console.log('before request', req.user);
  try {
    const user = await User.findById(req.user._id);
    user.favorites.pull(req.params.itemId);
    await user.save();
    console.log('after request', user);
    res.status(200).json({ message: 'Item removed from favorites' });
  } catch (err) {
    console.error('Error removing item from favorites:', err);
  }
}

async function getFavorites(req, res) {
  try {
  const user = await User.findById(req.user._id).populate('favorites');
  // user.favorites.forEach((favorite) => {
  //   // console.log(favorite._id.toString());
  //   const item = Item.findById(favorite._id.toString())
  //   favorites.push(item);
  // })

  console.log('user favorites', user.favorites);
  
  res.json(user.favorites);
  } catch (err) {
    console.log(err);
  }
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}