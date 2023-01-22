const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// it also has next as a parameter because this is a middleware
const protect = AsyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            //Get user from the token
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
