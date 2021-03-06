const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const userController = require("../controllers/user");

const router = express.Router();

router.post("/signup", userController.userCreate);

router.post("/login", userController.userLogin);

module.exports = router;