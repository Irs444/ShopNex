const express = require("express");
const router = express.Router();

const { userController,
    loginController,
    userProfileController,
    logoutController,
    updateProfileController,
    updatePasswordController
} = require("../controllers/userControllers.js");


const isAuth = require("../middlewares/authMiddleware.js");




router.post("/register", userController)

router.post("/login", loginController)

router.get("/profile", isAuth, userProfileController)

router.get("/logout", isAuth, logoutController)

router.put("/update-profile", isAuth, updateProfileController)

router.put("/update-password" , isAuth , updatePasswordController)









module.exports = router