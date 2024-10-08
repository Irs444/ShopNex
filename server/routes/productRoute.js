const express = require("express");
const router = express.Router();
const {isAuth, isAdmin} = require("../middlewares/authMiddleware")
const singleUpload = require("../middlewares/multer");
const {
    getProductController,
    singleProductController,
    createProductController,
    updateProductController,
    updateProductImage,
    deleteProductImage,
    deleteProductController,
    productReview,
    getTopProduct
} = require("../controllers/productController");                      


router.get("/getall", getProductController)

router.get("/top" , getTopProduct)

router.get("/getbyId/:id", singleProductController) 

router.post("/create", isAuth , isAdmin, singleUpload, createProductController)

router.put("/:id" , isAuth , isAdmin, updateProductController)

router.put("/image/:id", isAuth , isAdmin, singleUpload,  updateProductImage)

router.delete("/delete-image/:id" , isAuth, isAdmin, deleteProductImage)

router.delete("/deletebyId/:id" , isAuth, isAdmin, deleteProductController)

router.put("/:id/review" , isAuth , productReview)






module.exports = router