const asyncHandler = require("express-async-handler");
const Fabric = require("../models/fabricModel"); // this will have bunch of mongoose methods that we can use to create or read in our database
// const User = require("../models/userModel"); // this will have bunch of mongoose methods that we can use to create or read in our database

// @desc   Get fabrics
// @route GET /api/fabrics
// @access Private
//now we are adding sync because mongoose gives a promise to interact with database
//asyncHandler used so we do not have to do try catch for each async function
const getFabrics = asyncHandler(async (req, res) => {
  //not below anymore
  // const fabrics = await Fabric.find({ user: req.user.id });

  //we know wanna make the fabrics the commong property
  //we do await bc this is async (you can pass in an object in find )
  const fabrics = await Fabric.find();
  // now we have user field on the fabrics, and now we can access it bc of the protect middleware

  res.status(200).json(fabrics);
});

const getFabric = asyncHandler(async (req, res) => {
  //req.params.id is what is in the url after the directory/
  if (!req.params.id) {
    res.status(400);
    throw new Error(`Please add a id field ${req.params.id}`);
  }

  let sku;
  isnum = /^\d+$/.test(req.params.id);
  if (isnum) {
    sku = parseInt(req.params.id);
  } else {
    sku = req.params.id;
  }
  const fabric = await Fabric.findOne({ sku });
  // const fabric = await Fabric.findById(req.params.id);
  if (!fabric) {
    // console.log('you reached here');
    res.status(400);
    throw new Error("fabric not found");
  }

  res.status(200).json(fabric);
});

// @desc   Post fabrics
// @route POST /api/fabrics
// @access Private
const setFabric = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error(`Please add a name field ${req.body.name}`);
  }

  //I thought below chunk of code to be unnecessary
  //-------------------------------------------------------------
  //   else if (!req.body.width) {
  //   res.status(400);
  //   throw new Error(`Please add a width field ${req.body.width}`);
  // } else if (!req.body.price) {
  //   res.status(400);
  //   throw new Error(`Please add a price field ${req.body.price}`);
  // } else if (!req.body.origin) {
  //   res.status(400);
  //   throw new Error(`Please add the country of manufacture ${req.body.origin}`);
  // } else if (!req.body.imageFileName) {
  //   res.status(400);
  //   throw new Error(`Please add a picture ${req.body.imageFileName}`);
  // }
  //---------------------------------------------------------------------------------

  const fabric = await Fabric.create({
    // idk how we could do fabric.create out of nowhere
    // user: req.user.id,
    name: req.body.name,
    brand: req.body.brand,
    sku: req.body.sku,
    price: req.body.price,
    width: req.body.width,
    verticalRepeat: req.body.verticalRepeat,
    horizontalRepeat: req.body.horizontalRepeat,
    collectionName: req.body.collectionName,
    type: req.body.type,
    origin: req.body.origin,
    finish: req.body.finish,
    railRoaded: req.body.railRoaded,
    generalDelivery: req.body.generalDelivery,
    composition: req.body.composition,
    abrasionTest: req.body.abrasionTest,
    pattern: req.body.pattern,
    endUse: req.body.endUse,
    cleaningCode: req.body.cleaningCode,
    imageFileName: req.body.imageFileName,
  });

  res.status(200).json(fabric);
});

// @desc   Update fabrics
// @route PUT /api/fabrics/:id
// @access Private
const updateFabric = asyncHandler(async (req, res) => {
  const fabric = await Fabric.findById(req.params.id); // id will be in the URL
  if (!fabric) {
    res.status(400);
    throw new Error("fabric not found");
  }

  // //check if user exists
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("user is not found");
  // }

  // //Make sure the logged in user mathces the fabric user
  // if (fabric.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("You are not authorized to do this");
  // }
  if (req.user.accType !== "admin") {
    res.status(401);
    throw new Error("You are not authorized to do this");
  }

  //In below, req.body is our data(in this case, our text)
  //Third argument just creates if it doesn't exist
  const updatedFabric = await Fabric.findByIdAndUpdate(
    req.params.id,
    req.body,
    //when below is set true, this functions returns the fabric as value to the updatedFabric, otherwise no
    {
      new: true,
    }
  ); //explains this line at first video at 54 mins
  res.status(200).json(updatedFabric);
});

// @desc   Delete fabrics
// @route DELETE /api/fabrics/:id
// @access Private
const deleteFabric = asyncHandler(async (req, res) => {
  const fabric = await Fabric.findById(req.params.id);
  if (!fabric) {
    res.status("400");
    throw new Error("fabric not found");
  }

  //  The ones below worked! I coded myself, but he went a different way in the video so
  //   const deleteThefabric = await fabric.findByIdAndDelete(req.params.id);
  //   res.status(200).json(deleteThefabric);

  //he deleted below
  // const user = await User.findById(req.user.id);

  //check if user exists
  // if (!req.user) {
  //   res.status(401);
  //   throw new Error("user is not found");
  // }

  // //Make sure the logged in user mathces the fabric user
  // if (fabric.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("You are not authorized to do this");
  // }

  //Make sure the logged in user is the admin to perform this
  if (req.user.accType !== "admin") {
    res.status(401);
    throw new Error("You are not authorized to do this");
  }

  //This is how he did it:
  await fabric.remove(); // idk why f is not capitalized here
  res.status(200).json({ id: req.params.id }); // we do this just for the front end for later bc we will need the ID
});

module.exports = {
  getFabrics, //function
  getFabric,
  setFabric,
  updateFabric,
  deleteFabric,
};
