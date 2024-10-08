var express = require("express");
var router = express.Router();
const authController = require("../controller/authController");

/* GET users listing. */
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
