//bring mongoose to create a mongodb Schema
const mongoose = require("mongoose");

//a Schema defines the structure of the documents we want to store inside its collection
//it is the thing that model wraps around
const goalSchema = mongoose.Schema(
  {
    //with every goal you need to know which user created that goal
    user: {
      type: mongoose.Schema.Types.ObjectId, //set's the type to be ObjectId (a special mongodb datatype to help identify documents)
      required: true, //makes the user field required for each goal entry
      reference: "User", //name of the model for object id to reference to
    },
    text: { //this is the data we will take and enter
      type: String, //setting data type
      required: [true, "Please add a text value"], //saying that it is a reqired field
    },
  },
  {
    timestamps: true, //this is optional but a good practice//this automatically generate time stamp properties for us such as createdAt and updatedAt properties //so everytime in the future we update or create this records it
  }
);

//now we are going to create a model, based on this goal Schema (thing that defines structure of this document)
//model is the thing that surrounds the Schema and provides us with an interface by which to communicate with a database collection for that document type


//usually models name starts with a capital letter, the name of this is important, we call it Goal, it is going to look at this name and pluralize it and look for that collection inside the database->so it is going to look for 'goals' in the database because we called it "goal"
//we do not have to say it in the future: look I want you to search the goals collection, instead whenever we use this goal constant right here to find something, then we do not need to say find the goals collection it will automatically look for that based on the goal's name
//second argument is the schema we want this model on


//now we will export this for our database.
module.exports = mongoose.model("Goal", goalSchema);
//PS: model name should be singular of the collection name but first letter capitilized
