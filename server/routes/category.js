const express = require("express");
const router = express.Router();
const CategorysController = require("../controllers/admin/CategorysController");

router.get("/categorys", CategorysController.index);
router.post("/categorys", CategorysController.create_category);
router.get("/categorys/:id", CategorysController.categoryId);
router.put("/categorys/:id", CategorysController.update_category);
router.delete("/categorys/:id", CategorysController.delete_category);

module.exports = router;
