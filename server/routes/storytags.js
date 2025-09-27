const express = require("express");
const router = express.Router();
const StorysTagsController = require("../controllers/admin/StorysTagsController");

router.get("/storytags", StorysTagsController.index);

module.exports = router;
