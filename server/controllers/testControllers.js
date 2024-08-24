 const testControllers = (req, res) => {
    res.status(200).send({
        message:"text router",
        success:true
    })
}

module.exports = testControllers