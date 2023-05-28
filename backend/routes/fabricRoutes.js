const express = require("express"); //to use the express router we bring it first
const router = express.Router();
const {
  getFabrics,
  setFabric,
  updateFabric,
  deleteFabric,
  getFabric,
} = require("../controllers/fabricController"); // this is a function

const { protect } = require("../middleware/authMiddleware");

// router.route('/').get(protect, getFabrics).post(protect, setFabric)
//I do not need above token anymore to display my fabrics, so I do like below instead now
router.route("/").get(getFabrics).post(setFabric);

router.route("/:id").get(getFabric).delete(protect, deleteFabric).put(protect, updateFabric);

module.exports = router;
