const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const NewAuthorController = require("../controllers/newAuthorController")
const NewPublisherController =require("../controllers/newPublisherCotroller")
const NewBookController =require("../controllers/newBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/newAuthor",NewAuthorController.newAuthor)

router.post("/newPublisher",NewPublisherController.newPublisher)

router.post("/newBook",NewBookController.newBook)

router.get("/getBooks", NewBookController.getBooks)

router.get("/getTrue",NewBookController.getTrue)

router.get("/getInc",NewBookController.getInc)

module.exports = router;