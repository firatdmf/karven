//@autor:Firat
//we authenticate the users with json web tokens (unlike the cookies, they are not stored in browser but in our application per each user)
const jwt = require("jsonwebtoken");
//below is the hash the password users provide for their account, so we do not have access to it, nor a hacker could see in our database even if they gain access
const bcrypt = require("bcryptjs");
//we're lazy to do .then().catch() methods for async functions, so we will use express async handler package instead
const asyncHandler = require("express-async-handler");
//now we will bring the model we created for our Mongo Database
const User = require("../models/userModel");

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  //we get these from the axios post requests from the frontend, specifically the auth service and slice files
  const { name, email, password } = req.body;

  //if the user did not fill in the fields, then tell about it by throwing an error.
  if (!name || !email || !password) {
    res.status(400);
    //this returns you an object where you can access the error value from the message property.
    //this error gets passed to errorHandler we created eventually, along with the stack object inside of that file
    throw new Error("Please add all fields");
  }

  //check if the email address already exists for a user
  const userExists = await User.findOne({ email });

  //if the user exists already, throw in a new error, errorHandler file will handle it as response.
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // now we will use brcypt to hash the password
  //first create some salt for the password
  const salt = await bcrypt.genSalt(10);
  //now let's sprinkle salt just like saltbae ;p
  const hashedPassword = await bcrypt.hash(password, salt); //take two input, first one is the plain password text, second is the salt

  // Create the user in DB
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  //right after the user is created, do below: send json data to the client. (below object doesn't go to redux)
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // accType:user.accType,
      //now lets create a jwt token for the user
      token: generateToken(user._id), // we could have just had token and that would have been fine too
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Authenticate a user
// @route POST /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  //get the data from post request
  const { email, password } = req.body;

  //check for the user provided email in database
  const user = await User.findOne({ email });

  //check if the password mathches
  //password is not hashed, user.password is hashed
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // accType:user.accType,
      //give a new jwt token to the user
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials"); // we will see this message in front end when the password info is wrong
  }
  // I commented out the below bc it was resulting in error in the console.
  // res.json({ message: "Login User" });
});

// @desc Get user data
// @route GET /api/users/me
// @access Private
//below function is to see who is the one logged in
const getMe = asyncHandler(async (req, res) => {
  // const {_id, name, email} = await User.findById(req.user.id)// we now have access to req.user.id bc we set that in the middleware -> makes it show whichever user is authenticated
  //he deleted above bc he said we already specify it in authMiddleware.js file in req.user variable
  //and when we call this function, in userController -> we call it as router.get("/me", protect, getMe) where protect is the authMiddleware. So it will work just fine
  res.status(200).json(req.user); //there is no reason to find the user again
});

//Generate JWT
//The below code will sign in a new token with the id that passed in, with that secret use, and it will expire in 30 days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//note that we are not logging out the user in here, the final determination of whether the user is logged is done by redux in frontend (The global user state)

//now lets export these so we can use it at another file (in userRouter)
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
