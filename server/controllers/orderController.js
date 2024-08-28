const { Error } = require("mongoose")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")

// create orders
const createOrder = async (req, res) => {
    try {
        const {
            shippingInfo,
            orderItems,
            paymentMethod,
            paymentInfo,
            itemPrice,
            tax,
            shippingCharges,
            totalAmount,
        } = req.body

        //validation
        // create order
        await orderModel.create({
            user: req.user._id,
            shippingInfo,
            orderItems,
            paymentMethod,
            paymentInfo,
            itemPrice,
            tax,
            shippingCharges,
            totalAmount,

        })

        // stock update
        for (let i = 0; i < orderItems.length; i++) {
            // find product
            const product = await productModel.findById(orderItems[i].product)
            product.stock -= orderItems[i].quantity
            await product.save()
        }
        res.status(200).send({
            success: true,
            message: "order placed successfully"
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error in create order API",
            error
        })
    }

}

// get all orders
const getallOrder = async (req, res) => {
    try {
        // find orders
        const orders = await orderModel.find({ user: req.user._id })
        res.status(200).send({
            success: true,
            message: "getall orders display",
            totalOrder: orders.length,
            orders
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error in getall order API"
        })
    }

}

// get single order
const getsingleOrder = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id)
        //validation
        if (!order) {
            return res.status(404).send({
                success: false,
                message: "order not found"
            })
        }
        res.status(200).send({
            success: true,
            message: "order found successfully ",
            order
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in get single order API',
            error
        })
    }

}

// delete order by ID
const deleteOrder = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id)
        // validation
        if (!order) {
            return res.status(404).send({
                success: false,
                message: "order ID not found"
            })
        }
        await order.deleteOne();
        res.status(200).send({
            success: true,
            message: "order delete successfully"
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error in delete order API"
        })
    }

}


module.exports = {
    createOrder,
    getallOrder,
    getsingleOrder,
    deleteOrder
}