//bring mongoose to create a mongodb Schema
const mongoose = require("mongoose");
//a Schema defines the structure of the documents we want to store inside its collection
//it is the thing that model wraps around
const fabricSchema = mongoose.Schema(
  {
    sku: {
      // type: String,
      // required: [true, "Please add the SKU"],
    },
    width: {
      type: Number,
      required: false,
      // default:300,
    },
    content: {
      type: Object,
      required: false,
      // default: { "Polyester": 100 },
    },
    price: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: [false, "Please add a name"],
    },
    brand: {
      type: String,
      required: false,
      // default: "Karven",
    },
    style: {
      type: Array,
      required: false,
    },
    pattern: {
      type: String,
      required: false,
    },
    patternType: {
      type: String,
      required: false,
    },
    theme: {
      type: String,
      required: false,
    },
    origin: {
      type: String,
      required: false,
    },
    abrasion: {
      type: Number,
      required: false,
    },
    use: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    certifications: {
      type: Array,
      required: false,
    },
    colors: {
      type: Array,
      required: false,
    },
    leadTime: {
      type: Number,
      required: false,
    },
    moq: {
      type: Number,
      required: false,
    },
    railRoaded: {
      type: Number,
      required: false,
    },
    verticalRepeat: {
      type: Number,
      required: false,
    },
    horizontalRepeat: {
      type: Number,
      required: false,
    },
    finish: {
      type: String,
      required: false,
    },
    cleaningCode: {
      type: String,
      required: false,
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
