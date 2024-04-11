const express = require("express");
const router = express.Router();
const businessUserCtrl = require("../../controllers/api/businessUsers");

router.post("/", businessUserCtrl.createBusinessUser);
router.get("/userId", businessUserCtrl.fetchBusinessUserData);

module.exports = router;
