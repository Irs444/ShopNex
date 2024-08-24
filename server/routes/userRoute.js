const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers.js"); 
const loginController = require("../controllers/userControllers.js");
const userProfileController = require("../controllers/userControllers.js");
const isAuth = require("../middlewares/authMiddleware.js");
const logoutController = require("../controllers/userControllers.js");



router.post("/register" , userController)

router.post("/login" , loginController)

router.get("/profile" , isAuth,  userProfileController)

router.get("/logout", isAuth , logoutController)









module.exports = router