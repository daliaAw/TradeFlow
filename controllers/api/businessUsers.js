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
    const token = createJWT(user);
    res.json({ token, user, business });
  } catch (err) {
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

module.exports = { createBusinessUser };
