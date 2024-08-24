const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers.js"); 
const loginController = require("../controllers/userControllers.js");


router.post("/register" , userController)

router.post("/login" , loginController)







module.exports = router