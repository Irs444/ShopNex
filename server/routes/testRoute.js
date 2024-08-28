const express = require("express")
const router = express.Router()

const testControllers = require("../controllers/testControllers.js")


router.get("/" , testControllers)
router.get("/" , testControllers)
router.get("/" , testControllers)
router.get("/" , testControllers)


module.exports =  router