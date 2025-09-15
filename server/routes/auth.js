const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/admin/auth/AuthController");

router.post("/auth/register", AuthController.register);

module.exports = router;
