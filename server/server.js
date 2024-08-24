const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")

const TestRoute = require("./routes/testRoute.js")

//dotenv config
dotenv.config();


const app = express()
const port = process.env.PORT

//middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())


app.use("/" , TestRoute)

app.use("/" , (req, res) => {
    res.status(200).send("Welcome to the server")
})


app.listen(port , () => {
    console.log(`server started at port ${process.env.PORT}`);
    
})