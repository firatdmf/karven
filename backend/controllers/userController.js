const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // now we will use brcypt to hash the password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt); //take two input, first one is the plain password text

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,  
      email: user.email,
      token: generateToken(user._id)// we could have just had token and that would have been fine too
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
    const {email,password} = req.body

    //check for user email
    const user = await User.findOne({email})

    //password is not hashed, user.password is hashed
    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials') // we will see this message in front end
    }
    // I commented out the below bc it was resulting in error in the console.
  // res.json({ message: "Login User" });
});

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    //he deleted below bc he said we already specify it in authMiddleware.js file in req.user variable
    // const {_id, name, email} = await User.findById(req.user.id)// we now have access to req.user.id bc we set that in the middleware -> makes it show whichever user is authenticated
    res.status(200).json(req.user) //there is no reason to find the user again
});

//Generate JWT
//The below code will sign in a new token with the id that passed in, with that secret use, and it will expire in 30 days
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
