const express = require("express");
const router = express.Router();
const StorysController = require("../../controllers/admin/StorysController");
const uploadStory = require("../../middleware/upload");

router.get("/storys", StorysController.index);
router.get("/select/category", StorysController.selectCategory);
router.post(
  "/create/story",
  uploadStory.single("coverimage"),
  StorysController.create_story
);
router.get("/story/:id", StorysController.storyId);
router.get("/storytag/:id", StorysController.storyTagId);
router.get("/select/tags", StorysController.selectTags);
router.post("/create/storytag", StorysController.createStorytags)
router.delete("/storytag/:id", StorysController.deleteStoryTag)

module.exports = router;
