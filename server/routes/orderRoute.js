const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/authMiddleware");
const {
    createOrder,
    getallOrder,
    getsingleOrder, 
    deleteOrder} = require("../controllers/orderController");

router.post("/create", isAuth, createOrder)

router.get("/getall", isAuth, getallOrder)

router.get("/getbyId/:id", isAuth, getsingleOrder)

router.delete("/delete/:id" , isAuth , deleteOrder)




module.exports = router