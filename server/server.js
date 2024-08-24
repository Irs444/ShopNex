const express = require("express")
const app = express()
const port = 8080


app.use("/" , (req, res) => {
    res.status(200).send("Welcome to the server")
})


app.listen(port , () => {
    console.log("server started");
    
})