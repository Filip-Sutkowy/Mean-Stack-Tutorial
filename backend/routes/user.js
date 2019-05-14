 const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const userController = require("../controllers/user");

const router = express.Router();

router.post("/signup", userController.userCreate);

router.post("/login", userController.userLogin);

module.exports = router;