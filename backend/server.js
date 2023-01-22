const path = require("path");
const express = require("express"); //backend web framework
const colors = require("colors"); // helps you use colors in the console
const dotenv = require("dotenv").config(); //to have environment variables -> this will alow us to have .env file with our variables in it
const { errorHandler } = require("../backend/middleware/errorMiddleware");
const fileUpload = require('express-fileupload');

//This says read the port from the .env file if not working go with 5000
const port = process.env.PORT || 5000; //arbitrary number picked by you for server

//connects the MongoDB database
const connectDB = require("./config/db");
connectDB();

const app = express(); //initializing the express

//these two were used to capture body url encoded text
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//If you hit below URL's in the browser, then go to these folders
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/fabrics", require("./routes/fabricRoutes"));

//-------------below actually works
//The below is from the lesson https://www.youtube.com/watch?v=b6Oe2puTdMQ&t=1339s (not actually part of the original project)
app.use(fileUpload());
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
  const file = req.files.imageFile; //this idk how works (nevermind now I get it)
  file.mv(
    `${__dirname}../../frontend/src/assets/fabricImages/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: file.name, filePath: `/fabricImages/${file.name}` });
    }
  );
});



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
//if we are in production then do this
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build"))); // we are setting up our static folder (build folder)
  app.get("*", (req, res) =>
    res.sendFile(
      // path.resolve(__dirname, "../", "frontend", "build", "index.html")
      path.join(__dirname, "../frontend/build/index.html")
    )
  ); // for any route, aside from api routes up there
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

//if we happened to have errors within the server run below
app.use(errorHandler);

// you don't wanna have all your routes in this file, it will be messy so let's do it clean, so we createa a folder called routes in backend folder

//below runs everytime your server is started on the port
//app is an object that we can call listen which takes two arguments, port number, and second argument with a function to show string
app.listen(port, () => console.log(`Server started on port ${port}`));
