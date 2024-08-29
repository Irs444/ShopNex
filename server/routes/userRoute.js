const express = require("express");
const router = express.Router();
const { rateLimit } = require('express-rate-limit') 

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

// rate limiter
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})


router.post("/register",limiter, userController)

router.post("/login", limiter, loginController)

router.get("/profile", isAuth, userProfileController)

router.get("/logout", isAuth, logoutController)

router.put("/update-profile", isAuth, updateProfileController)

router.put("/update-password" , isAuth , updatePasswordController)

router.put("/update-picture",isAuth , singleUpload , updateProfilePic)

router.put("/forget-password" ,  forgetPassword)









module.exports = router