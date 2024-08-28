const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db.js")
const cookieParser = require("cookie-parser")
const cloudinary = require("cloudinary")

const TestRoute = require("./routes/testRoute.js")
const UserRoute = require("./routes/userRoute.js")
const ProductRoute = require("./routes/productRoute.js")
const CategoryRoute = require("./routes/categoryRoute.js")
const OrderRoute = require("./routes/orderRoute.js")
const { isAuth } = require("./middlewares/authMiddleware.js")

//dotenv config
dotenv.config();

//database connection
connectDB();

// stripe config
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// cloudinary config
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})


const app = express()
const port = process.env.PORT

//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(cookieParser())    // middleware



app.use("/", TestRoute)
app.use("/user", UserRoute)
app.use("/product", ProductRoute)
app.use("/category", CategoryRoute)
app.use("/order", OrderRoute)


app.post("/payment", isAuth, async(req, res) => {
    try {
        // get amount
        const {totalAmount} = req.body
        //validation
        if(!totalAmount){
            return res.status(500).send({
                success:false,
                message:"totalAmount is required"
            })
        }
        const {client_secret} = await stripe.paymentIntents.create({
            amount:Number(totalAmount * 100),
            currency:"usd"
        })
        res.status(200).send({
            success:true,
            message:"Payment Successfull",
            client_secret
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in payment API"
        })

    }
})




app.listen(port, () => {
    console.log(`server started at port ${process.env.PORT}`);

})