const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSingup")
const userSignInConroller = require('../controller/UserSingin')
router.post("/signup",userSignUpController)
router.post("/signin",userSignInConroller)

module.exports = router 