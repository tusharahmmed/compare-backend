const { getCost, updateCost, addCost, getSingleCost } = require("../controllers/costController");

const router = require("express").Router();

// get costs
router.get("/",getCost);
// get single obj
router.get("/:id",getSingleCost);

// update costs
router.put("/:id",updateCost)

// add costs
router.post("/",addCost);

module.exports = router;
