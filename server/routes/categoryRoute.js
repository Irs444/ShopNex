const express = require("express");
const router = express.Router();
const {isAuth} = require("../middlewares/authMiddleware");
const {
    createCategory,
    getallCategory,
    deleteCategory,
    updateCategory
} = require("../controllers/categoryController");



router.post("/create", isAuth, createCategory)

router.get("/getall", isAuth, getallCategory)

router.delete("/delete/:id" , isAuth , deleteCategory)

router.put("/update/:id" , isAuth, updateCategory)








module.exports = router