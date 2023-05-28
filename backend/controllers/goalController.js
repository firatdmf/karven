const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel"); // this will have bunch of mongoose methods that we can use to create or read in our database
const User = require("../models/userModel"); // this will have bunch of mongoose methods that we can use to create or read in our database

// @desc   Get goals
// @route GET /api/goals
// @access Private
//now we are adding sync because mongoose gives a promise to interact with database
//asyncHandler used so we do not have to do try catch for each async function
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id }); //we do await bc this is async (you can pass in an object in find )
  // now we have user field on the goals, and now we can access it bc of the protect middleware

  res.status(200).json(goals);
});

// @desc   Post goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    // idk how we could do Goal.create out of nowhere
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

// @desc   Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id); // id will be in the URL
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }


  //check if user exists
  if (!req.user) {
    res.status(401);
    throw new Error("user is not found");
  }

  //Make sure the logged in user mathces the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You are not authorized to do this");
  }

  //In below, req.body is our data(in this case, our text)
  //Third argument just creates if it doesn't exist
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); //explains this line at first video at 54 mins
  res.status(200).json(updatedGoal);
});

// @desc   Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status("400");
    throw new Error("Goal not found");
  }

  //  The ones below worked! I coded myself, but he went a different way in the video so
  //   const deleteTheGoal = await Goal.findByIdAndDelete(req.params.id);
  //   res.status(200).json(deleteTheGoal);

  //he deleted below
  // const user = await User.findById(req.user.id);

  //check if user exists
  if (!req.user) {
    res.status(401);
    throw new Error("user is not found");
  }

  //Make sure the logged in user mathces the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You are not authorized to do this");
  }

  //This is how he did it:
  await goal.remove(); // idk why g is not capitalized here
  res.status(200).json({ id: req.params.id }); // we do this just for the front end for later bc we will need the ID
});

module.exports = {
  getGoals, //function
  setGoal,
  updateGoal,
  deleteGoal,
};
