const express = require("express");
const router = express.Router();
const {isAuth, isAdmin} = require("../middlewares/authMiddleware");
const {
    createCategory,
    getallCategory,
    deleteCategory,
    updateCategory
} = require("../controllers/categoryController");



router.post("/create", isAuth, isAdmin, createCategory)

router.get("/getall", isAuth, getallCategory)

router.delete("/delete/:id" , isAuth , isAdmin, deleteCategory)

router.put("/update/:id" , isAuth, isAdmin, updateCategory)








module.exports = router