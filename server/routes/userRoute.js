const express = require("express");
const router = express.Router();

const { userController,
    loginController,
    userProfileController,
    logoutController,
    updateProfileController,
    updatePasswordController,
    updateProfilePic,
    forgetPassword
} = require("../controllers/userControllers.js");


const {isAuth} = require("../middlewares/authMiddleware.js");
const singleUpload = require("../middlewares/multer.js");




router.post("/register", userController)

router.post("/login", loginController)

router.get("/profile", isAuth, userProfileController)

router.get("/logout", isAuth, logoutController)

router.put("/update-profile", isAuth, updateProfileController)

router.put("/update-password" , isAuth , updatePasswordController)

router.put("/update-picture",isAuth , singleUpload , updateProfilePic)

router.put("/forget-password" ,  forgetPassword)









module.exports = router