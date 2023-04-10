const { getDhlZone, addNewDhlZone, getDhlZoneByCountry, updateDhlZoneByCountry, deleteDhlZoneByCountry } = require("../controllers/dhlZoneController");
const { getFedExZone, addNewFedExZone, getFedExZoneByCountry, updateFedExZoneByCountry, deleteFedExZoneByCountry } = require("../controllers/fedExZoneController");

const router = require("express").Router();

/**
 * root route: "/zone/dhl"
 */
// get all zone
router.get('/',getFedExZone)

// add new country zone
router.post('/',addNewFedExZone)

// get country zone
router.get('/:country',getFedExZoneByCountry)

// update country zone
router.put('/:country',updateFedExZoneByCountry)

// delete country zone
router.delete('/:country',deleteFedExZoneByCountry)

module.exports = router;
