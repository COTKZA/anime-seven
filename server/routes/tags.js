const express = require("express");
const router = express.Router();
const TagsController = require("../controllers/admin/TagsController");

router.get("/tags", TagsController.index);
router.post("/tags", TagsController.create_tag);

module.exports = router;
