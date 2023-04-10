const DhlZone = require("../models/dhlZoneModel");

/**
 * router route: "/"
 * res: get dhl zone list
 * method: "GET"
 */
exports.getDhlZone = (req, res) => {
  DhlZone.find({})
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

/**
 * router route: "/"
 * res: add new dhl zone
 * method: "POST"
 */
exports.addNewDhlZone = (req, res) => {
  let { country, zone_id, status } = req.body;
  const zone = new DhlZone({ country, zone_id, status });

  zone
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

/**
 * router route: "/:country"
 * res: get dhl zone by country
 * params: countryName
 * method: "GET"
 */
exports.getDhlZoneByCountry = (req, res) => {
  let { country } = req.params;

  DhlZone.findOne({ country })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

/**
 * router route: "/:country"
 * res: update dhl zone by country
 * params: countryName
 * body: updated content
 * method: "PUT"
 */
exports.updateDhlZoneByCountry = (req, res) => {
  let countryName = req.params.country;

  const { country, status, zone_id } = req.body;

  DhlZone.findOneAndUpdate(
    { country: countryName },
    {
      $set: {
        country,
        status,
        zone_id,
      },
    },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};
/**
 * router route: "/:country"
 * res: delete dhl zone by country
 * params: countryName
 * method: "DELETE"
 */

exports.deleteDhlZoneByCountry = (req, res) => {
  let { country } = req.params;

  DhlZone.findOneAndDelete({ country })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};
