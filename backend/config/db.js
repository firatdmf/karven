// ******* This file is used to connect to mongodb mongoose *********
//@author: Firat
// Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment. (It is a much simplified version of mongodb original package)
const mongoose = require("mongoose");
//if below is true, then mongodb only posts or updates a document if the given document's structure is exactly the same as the ones we have in the collection. It might be a good thing to have it true, but it gives stupid warnings when it's true, so I disabled it.
mongoose.set("strictQuery", false);

//every mongoDB thing needs to be an async function because it takes a little time for mongodb to respond back to the queries
const connectDB = async () => {
  try {
    //await, waits for a return to store in conn before moving to the next lines of codes
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // const conn = await mongoose.connect('mongodb+srv://firat:kzo8MnKrCgNNuzvY@traversycluster.zz4mm.mongodb.net/mernapp?retryWrites=true&w=majority')
    console.log(
      //below we can use custom colors on terminal text because we imported colors package from npm in server.js file. And this function, actually, runs in there.
      `Hey Karven! Your MongoDB is now Connected: ${conn.connection.host}`.italic.cyan
    );
  } catch (error) {
    //prints out the error
    console.log(error);
    // exits the process
    process.exit(1);
  }
};

//we export this function so we can refer to it and use it in server.js
module.exports = connectDB;
