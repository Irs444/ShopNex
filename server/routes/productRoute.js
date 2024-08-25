const express = require("express");
const router = express.Router();
const {
    getProductController,
    singleProductController
} = require("../controllers/productController");                      


router.get("/getall", getProductController)

router.get("/getbyId/:id", singleProductController) 






module.exports = router