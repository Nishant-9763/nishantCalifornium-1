const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const NewProductController= require("../controllers/newProductController")
const NewUserController= require("../controllers/newUserController")
const NewOrderController= require("../controllers/newOrderController")
const Midd =require("../middlewares/MiddleWare2");
const NewUserModel = require('../models/NewUserModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", commonMW.abc, BookController.createBook  )
router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)






router.post("/newProduct",NewProductController.newProduct )

router.post("/newUser", NewUserController.newUser)

router.post("/newOrder",  NewOrderController.newOrder)

// router.post("/updateValue", NewProductController.updatePrice)
    
      


module.exports = router;
// if header is true the product amount is zero and set isfreeAppuser ture in user
//if header is false then check product price and deduct amount from user balance (userbal-productprice) and order amount == product price and 