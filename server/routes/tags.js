const express = require("express");
const router = express.Router();
const TagsController = require("../controllers/admin/TagsController");

router.get("/tags", TagsController.index);
router.post("/tags", TagsController.create_tag);
router.get("/tags/:id", TagsController.tagId);
router.put("/tags/:id", TagsController.update_tags);
router.delete("/tags/:id", TagsController.delete_tags);

module.exports = router;
