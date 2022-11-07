const express=require('express')

const userController= require("../controllers/userController.js");

const { authenticate, authorise } = require('../Middleware/auth');

const router=express.Router();

router.get("/home",(req,res)=>{

    res.status(400).send("Welcome to the new world");

})

router.post("/users",userController.createUser)

router.post("/login",userController.login)

router.put("/users/:userId",authenticate,authorise,userController.updateUserData)

router.post("/users/:userId/posts",authenticate,authorise,userController.userPost)

router.get("/users/:userId/",authenticate,authorise,userController.getUserData)

module.exports=router;