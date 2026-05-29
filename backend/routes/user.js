const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {signupUser,loginUser} =require('../controllers/userController.js')
const router=express.Router()
router.post('/login',loginUser)
router.post('/signup',signupUser)
module.exports=router;