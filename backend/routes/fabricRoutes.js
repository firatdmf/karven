const express = require("express"); //to use the express router we bring it first
const router = express.Router();
const {
  getFabrics,
  setFabric,
  updateFabric,
  deleteFabric,
} = require("../controllers/fabricController"); // this is a function

const {protect} = require('..//middleware/authMiddleware')

router.route('/').get(protect, getFabrics).post(protect, setFabric)

router.route('/:id').delete(protect, deleteFabric).put(protect, updateFabric)

module.exports = router;
