//to utilize the routers outside the main server.js file in a fancy fashion, we need to bring express first
const express = require("express");
//and then we bring the router out of express. This will helps us to perform specific actions depending on the requests sent to a specific url
const router = express.Router();

//Now we have predefined the methods we can perform in a seperate file called Controller where take the inputs of the user and perform mongodb queries, then respond back to the client
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController"); // this is a function

const { protect } = require("../middleware/authMiddleware");

//note that for above two we did not say import ... from ... because this is not react (frontend), so we just do common js to import stuff

//below is how you handle get requests.
//second argument takes request & respond variable
//to respond you can do res.send and pass a string.
// router.get("/", (req, res) => {
//   //if you do this you will see postman will give you that string but we usually do .json insead of .send so
//   // res.send("Get goals")
//   res.status(200).json({ message: "Get goals" }); // you don't have to put double quotes on the message as it does it itself
//   //in the above "".status(200)"" is unnessary but he likes to put it to make sure, gives the same result
// });

//we added const {getGoals} = require part later
//so the above code now can be changed to below
// router.get("/", getGoals);
// router.post("/", setGoal);
//but now that we know that get goal and set goal are on the same path (without id)
//we can combine them like below
router.route("/").get(protect, getGoals).post(protect, setGoal);

//we can do the same thing of combination to the below code
// router.put('/:id',updateGoal)
// router.delete("/:id", deleteGoal);

router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
