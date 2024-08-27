const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")

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
            user:req.user._id,
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
        for(let i=0; i<orderItems.length; i++){
            // find product
            const product = await productModel.findById(orderItems[i].product)
            product.stock -= orderItems[i].quantity
            await product.save()
        }
        res.status(200).send({
            success:true,
            message:"order placed successfully"
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error in create order API",
            error
        })
    }

}


module.exports = {
    createOrder
}