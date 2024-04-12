const BusinessUser = require("../../models/businessUser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

async function createBusinessUser(req, res) {
  try {
    // Add the user to the db
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isBusiness: req.body.isBusiness,
    });
    const business = await BusinessUser.create({
      businessName: req.body.businessName,
      businessPhone: req.body.businessPhone,
      businessAddress: req.body.businessAddress,
      user: user._id,
    });
    console.log("buzz: ", business);
    const token = createJWT(user, business);
    console.log(token);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function fetchBusinessUserData(req, res) {
  console.log(req.params.userId);
  try {
    const businessUser = await BusinessUser.findOne({
      user: req.params.userId,
    });
    // if (!businessUser) {
    //   throw new Error("Business user not found");
    // }
    console.log("business user:", businessUser);
    res.json(businessUser);
  } catch (err) {
    console.log(err);
  }
}

function createJWT(user, business) {
  return jwt.sign(
    // data payload
    { user, business },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

module.exports = { createBusinessUser, fetchBusinessUserData };
