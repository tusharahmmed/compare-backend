const { getDhlZone, addNewDhlZone, getDhlZoneByCountry, updateDhlZoneByCountry, deleteDhlZoneByCountry } = require("../controllers/dhlZoneController");

const router = require("express").Router();

/**
 * root route: "/zone/dhl"
 */
// get all zone
router.get('/',getDhlZone)

// add new country zone
router.post('/',addNewDhlZone)

// get country zone
router.get('/:country',getDhlZoneByCountry)

// update country zone
router.put('/:country',updateDhlZoneByCountry)

// delete country zone
router.delete('/:country',deleteDhlZoneByCountry)

module.exports = router;
