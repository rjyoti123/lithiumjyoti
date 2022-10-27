const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//  const allbooks = require('../controllers/books_api')
// const bookDetls = require("../models/bookmodel")
const bookDetls= require("../controllers/booksApi")
const bookModel= require("../models/booksModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/booksDetails", bookDetls.takeBook)

router.get("/booksDetails", bookDetls.getData)

module.exports = router;