const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/authMiddleware")
const singleUpload = require("../middlewares/multer");
const {
    getProductController,
    singleProductController,
    createProductController
} = require("../controllers/productController");                      


router.get("/getall", getProductController)

router.get("/getbyId/:id", singleProductController) 

router.post("/create", isAuth , singleUpload, createProductController)






module.exports = router