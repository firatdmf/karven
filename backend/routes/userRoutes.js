//you need to bring express to use routers outside
const express = require("express");
//bringing the router from express package
const router = express.Router();

//bring the below handler methods from the User Controller file
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

//this is to ensure that the actual/correct user is performing the actions not some hacker elsewhere who gained the access to the account
const {protect} = require('../middleware/authMiddleware')

//You do not need to protect register and login user because they are not logged in at those moments
router.post("/", registerUser);
router.post("/login", loginUser);

//You need to protect this one because it is an operation after the user is logged in.
router.get("/me", protect, getMe);

module.exports = router;
