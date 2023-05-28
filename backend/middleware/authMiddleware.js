//we do not want to do try and catch for our await function, so we can just bring asyncHandler that does it automatically in the backend
const asyncHandler = require('express-async-handler');
//we use json web token authentication so we need this
const jwt = require('jsonwebtoken');
// We bring our user model from our database
const User = require('../models/userModel');

// it also has next as a parameter because this is a middleware
const protect = asyncHandler(async(req,res,next)=>{
    //initialize a token variable
    let token;
    //if there is headers authorization and it starts with Bearer then that means there is a token variable inside the browser
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get the token from header inside the browser and set it equal to the variable token
            token = req.headers.authorization.split(' ')[1]

            //verify the token to see if it actually exists in our application
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            //Then find the user that has that token and set it equal to a variable called req.user (a request object that has a key named user that also an object where each key represents user info from the database except their password because no passwords should be worked in the browser/front-end even if they are hashed and salted (bycripted))
            req.user=await User.findById(decoded.id).select('-password') // it will not include password this way
            next() // calling the next piece of middleware

        }catch(error){
            console.log(error)
            res.status(401); //bc 401 means not authorized
            throw new Error('Not authorized')


        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports ={protect}
