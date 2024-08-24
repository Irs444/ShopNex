const express = require("express");
const userController = require("../controllers/userControllers.js");
const router = express.Router();

router.post("/register" , userController)







module.exports = router