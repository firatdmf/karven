//bring mongoose to create a mongodb Schema
const mongoose = require("mongoose");
//a Schema defines the structure of the documents we want to store inside its collection
//it is the thing that model wraps around
const fabricSchema = mongoose.Schema(
  {
    //with every goal you need to know which user created that goal
    user: {
      //set's the type to be ObjectId (a special mongodb datatype to help identify documents)
      type: mongoose.Schema.Types.ObjectId, 
      required: true,
       //name of the model for object id to reference to
      reference: "User",
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    brand: {
      type: String,
      required: [false, "Please add the brand"],
    },
    sku: {
      type: String,
      required: [false, "Please add the SKU"],
    },
    price: {
      type: Number,
      required: [false, "Please specify width"],
    },
    width: {
      type: Number,
      required: [false, "Please specify content"],
    },
    verticalRepeat: {
      type: Number,
      required: false,
    },
    horizontalRepeat: {
      type: Number,
      required: false,
    },
    collectionName: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    origin: {
      type: String,
      required: false,
    },
    finish: {
      type: String,
      required: false,
    },
    railRoaded: {
      type: Boolean,
      required: false,
    },
    generalDelivery: {
      type: String,
      required: false,
    },
    composition: {
      type: String,
      required: false,
    },
    abrasionTest: {
      type: Number,
      required: false,
    },
    pattern: {
      type: String,
      required: false,
    },
    endUse: {
      type: String,
      required: false,
    },
    cleaningCode: {
      type: String,
      required: false,
    },
    imageFileName: {
      required: false,
      type: String,
    },
  },
  {
    //this is optional but a good practice//this automatically generate time stamp properties for us such as createdAt and updatedAt properties //so everytime in the future we update or create this records it
    timestamps: true, 
  }
);

//PS: model name should be singular of the collection name except first letter capitilized
//mongodb later looks at the database, and finds the collection that is the plural of this name
module.exports = mongoose.model("Fabric", fabricSchema);
