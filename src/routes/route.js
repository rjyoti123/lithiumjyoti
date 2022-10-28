const express = require('express');

const router = express.Router();



const newBookController= require("../controllers/newBookController")



router.get("/", function (req, res) {

    res.send("Hello, Welcome to Programming Yatra")

})



router.post("/createNewAuthor", newBookController.createNewAuthor)



router.get("/getNewAuthor", newBookController.getNewAuthor)



router.post("/createNewBook", newBookController.createNewBook)



router.get("/getNewBook", newBookController.getNewBook)



router.post("/createNewPublisher", newBookController.createNewPublisher)



router.get("/getNewPublisher", newBookController.getNewPublisher)



module.exports = router;
  