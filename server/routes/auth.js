const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/admin/auth/AuthController");
const authmiddleware = require("../middleware/auth");

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.post("/auth/logout", AuthController.logout);
router.get("/auth/profile", authmiddleware, AuthController.getProfile);

module.exports = router;
