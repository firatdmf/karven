const path = require("path"); //this is a core module, allowing us to interact with file paths and directories.
const express = require("express"); //backend web framework
const colors = require("colors"); // helps you use colors in the console
const dotenv = require("dotenv").config(); //to have environment variables -> this will alow us to have .env file with our variables in it
const  {errorHandler}  = require("../backend/middleware/errorMiddleware"); //we have built a customer error handler. This goes after all the handlers fired, meaning nothing worked, so there must be an error.
// const fileUpload = require('express-fileupload');

//We are connecting to our database with the below function.
const connectDB = require("./config/db");
connectDB();

//This says read the port from the .env file if not working go with 5000
const port = process.env.PORT || 5000; //arbitrary number picked by you for server

const app = express(); //initializing the express app (express helps us set up our handlers more easily)

//these two were used to capture body url encoded text (they are basically for post and put requests where you get data from the user where it is encoded in req.body)
app.use(express.json()); // This is a built-in express middleware that convert request body to JSON. -> //This is to recognize the incoming requests as json objects, so this passes any json coming in as request so we can use it inside our handler functions
app.use(express.urlencoded({ extended: false }));//This is just like express.json() converts request body to JSON, it also carries out some other functionalities like: converting form-data to JSON etc. -> //this is to recognize incoming requests as strings or arrays. (like post request html forms where you get {"username":"dean"})

//If you hit below URL's in the browser, then go to these folders (they are routers for handlers) -> axios from redux files does this (slicer and service)
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/fabrics", require("./routes/fabricRoutes"));
app.use("/api/goals", require("./routes/goalRoutes"));

//-------------below actually works
//The below is from the lesson https://www.youtube.com/watch?v=b6Oe2puTdMQ&t=1339s (not actually part of the original project)
// app.use(fileUpload());
// app.post("/upload", (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: "No file was uploaded" });
//   }
//   const file = req.files.imageFile; //this idk how works (nevermind now I get it)
//   file.mv(
//     `${__dirname}../../frontend/src/assets/fabricImages/${file.name}`,
//     (err) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send(err);
//       }

//       res.json({ fileName: file.name, filePath: `/fabricImages/${file.name}` });
//     }
//   );
// });



//second try (this one I did not use)
// app.use(fileUpload());

// // Upload Endpoint
// app.post('/upload', (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: 'No file uploaded' });
//   }

//   const file = req.files.file;

//   file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });

//---------------------

//Server frontend
//if we are in production then do this (only set in production when you deploy your app, your build folder will be rendered there unlike in here)
//our local one, automatically brings the browser to our react application, idk how it does that but it is what it is
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build"))); // we are setting up our static folder (build folder)
  app.get("*", (req, res) =>
    res.sendFile(
      // path.resolve(__dirname, "../", "frontend", "build", "index.html")
      path.join(__dirname, "../frontend/build/index.html")
    )
  ); // for any route, aside from api routes go up there
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

//if we happened to have errors within the server run below
app.use(errorHandler);

// you don't wanna have all your routes in this file, it will be messy so let's do it clean, so we createa a folder called routes in backend folder

//below runs everytime your server is started on the port
//app is an object that we can call listen which takes two arguments, port number, and second argument with a function to show string
app.listen(port, () => console.log(`Server started on port ${port}`.magenta));
