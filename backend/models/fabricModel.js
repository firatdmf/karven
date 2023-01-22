const mongoose = require("mongoose");

const fabricSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      reference: "User", //name of the model for object id to reference to
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
    type:{
      type:String,
      required:false,
    },
    origin:{
      type: String,
      required:false,
    },
    finish:{
      type:String,
      required:false,
    },
    railRoaded:{
      type: Boolean,
      required:false,
    },
    generalDelivery:{
      type: String,
      required:false,
    },
    composition:{
      type: String,
      required:false,
    },
    abrasionTest:{
      type: Number,
      required:false
    },
    pattern:{
      type:String,
      required:false,
    },
    endUse:{
      type:String,
      required:false,
    },
    cleaningCode:{
      type:String,
      required:false,
    },
    imageFileName: {
      required: false,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Fabric", fabricSchema);
