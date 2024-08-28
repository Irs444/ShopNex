const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/authMiddleware")
const singleUpload = require("../middlewares/multer");
const {
    getProductController,
    singleProductController,
    createProductController,
    updateProductController,
    updateProductImage,
    deleteProductImage,
    deleteProductController
} = require("../controllers/productController");                      


router.get("/getall", getProductController)

router.get("/getbyId/:id", singleProductController) 

router.post("/create", isAuth , singleUpload, createProductController)

router.put("/:id" , isAuth , updateProductController)

router.put("/image/:id", isAuth , singleUpload,  updateProductImage)

router.delete("/delete-image/:id" , isAuth , deleteProductImage)

router.delete("/deletebyId/:id" , isAuth , deleteProductController)






module.exports = router