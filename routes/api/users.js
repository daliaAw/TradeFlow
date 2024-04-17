const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// All paths start with '/api/users'
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);
// POST /api/users (create a user - sign up)
router.post("/", usersCtrl.create);
// POST /api/users/login
router.post("/login", usersCtrl.login);
// GET /api/users/check-token
router.get("/check-token", usersCtrl.checkToken);
// POST /favorites/add
router.post("/favorites/add/:itemId", ensureLoggedIn, usersCtrl.addToFavs);
// POST /favorites/remove
router.delete("/favorites/remove/:itemId", ensureLoggedIn, usersCtrl.removeFav);
router.get("/favorites/index", usersCtrl.getFavorites);


module.exports = router;