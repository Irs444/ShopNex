const express = require("express");
const router = express.Router();
const {isAuth, isAdmin} = require("../middlewares/authMiddleware");
const {
    createOrder,
    getallOrder,
    getsingleOrder, 
    deleteOrder,
    fetchallOrders,
    changeOrderStatus} = require("../controllers/orderController");

router.post("/create", isAuth, isAdmin, createOrder)

router.get("/getall", isAuth, getallOrder)

router.get("/getbyId/:id", isAuth,  getsingleOrder)

router.delete("/delete/:id" , isAuth, isAdmin, deleteOrder)

//=============Admin Section=============

router.get("/admin/getall" , isAuth , isAdmin , fetchallOrders)

router.put("/admin/update/:id" , isAuth, isAdmin, changeOrderStatus)




module.exports = router