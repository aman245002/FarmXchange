const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSingup")
const userSignInConroller = require('../controller/UserSingin')
const userLogout = require('../controller/userLogout')
router.post("/signup",userSignUpController)
router.post("/signin",userSignInConroller)
router.get("/userLogout",userLogout)
module.exports = router 