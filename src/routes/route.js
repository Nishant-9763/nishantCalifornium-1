const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MyUserController= require("../controllers/myUserController")
const MyUserMiddleWare= require("../middleWares/auth")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)




router.post("/users1", MyUserController.createuser)

router.post("/login1", MyUserController.loginUser)

router.get("/users1/:userId",MyUserMiddleWare.tk, MyUserController.getUser)

router.put("/users1/:userId", MyUserMiddleWare.tk,  MyUserController.updatedUser)

router.delete("/users1/:userId",MyUserMiddleWare.tk, MyUserController.deleteUser)






module.exports = router;