// this file is used to connect to mongodb mongoose
// Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.
const mongoose = require("mongoose");

//every mongoDB thing is async
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // const conn = await mongoose.connect('mongodb+srv://bradt1234:bradt1234@traversycluster.zz4mm.mongodb.net/mernapp?retryWrites=true&w=majority')
    console.log(
      `Hey Firat! MongoDB Connected: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
