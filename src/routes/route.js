const express = require('express');
const router = express.Router();
// const UserModel= require("../models/bookModel0")r
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookController0 =require("../controllers/bookController0");



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook0" ,BookController0.createBook)

router.get("/bookList" ,BookController0.bookList)

router.get("/getRandomBooks", BookController0.getRandomBooks)

router.get("/getXINRBooks" , BookController0.getXINRBooks)

router.get("/getBooksInYear", BookController0.getBooksInYear)

router.get("/getParticularBooks", BookController0.getParticularBooks)



// router.get("/getBooksInYear" ,BookController0.getBooksInYear)

module.exports = router;