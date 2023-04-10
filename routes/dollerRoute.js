const {
  getDollarRate,
  addDollarRate,
  updateDollarRate,
  getSingleDollarRate,
} = require("../controllers/dollarController");

const router = require("express").Router();

/**
 * root route: /dollar-rate
 */

// get dollar rate
router.get("/", getDollarRate);

// get dollar rate
router.get("/:id", getSingleDollarRate);

// update dollar rate
router.put("/:id", updateDollarRate);

// add dollar rate
router.post("/", addDollarRate);

module.exports = router;
