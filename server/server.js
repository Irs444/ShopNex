const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db.js")
const cookieParser = require("cookie-parser")
const TestRoute = require("./routes/testRoute.js")
const UserRoute = require("./routes/userRoute.js")

//dotenv config
dotenv.config();

//database connection
connectDB();


const app = express()
const port = process.env.PORT

//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(cookieParser())    // middleware



app.use("/" , TestRoute)
app.use("/user" , UserRoute)




app.listen(port , () => {
    console.log(`server started at port ${process.env.PORT}`);
    
})