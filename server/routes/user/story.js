const express = require("express");
const router = express.Router();
const StorysController = require("../../controllers/user/StorysController");

router.get("/storys", StorysController.index);

module.exports = router;
