const express = require("express");
const isAuth = require("../middlewares/authMiddleware");
const { createOrder } = require("../controllers/orderController");
const router = express.Router();

router.post("/create" , isAuth , createOrder)




module.exports = router