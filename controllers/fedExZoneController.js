const FedExZone = require("../models/fedexZoneModel");

/**
 * router route: "/"
 * res: get fedex zone list
 * method: "GET"
 */
exports.getFedExZone = (req, res) => {
    FedExZone.find({})
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

/**
 * router route: "/"
 * res: add new fedex zone
 * method: "POST"
 */
exports.addNewFedExZone = (req, res) => {
  let { country, zone_id, status } = req.body;
  const zone = new FedExZone({ country, zone_id, status });

  zone
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

/**
 * router route: "/:country"
 * res: get fedex zone by country
 * params: countryName
 * method: "GET"
 */
exports.getFedExZoneByCountry = (req, res) => {
  let { country } = req.params;

  FedExZone.findOne({ country })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

/**
 * router route: "/:country"
 * res: update fedex zone by country
 * params: countryName
 * body: updated content
 * method: "PUT"
 */
exports.updateFedExZoneByCountry = (req, res) => {
  let countryName = req.params.country;

  const { country, status, zone_id } = req.body;

  FedExZone.findOneAndUpdate(
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
 * res: delete fedex zone by country
 * params: countryName
 * method: "DELETE"
 */

exports.deleteFedExZoneByCountry = (req, res) => {
  let { country } = req.params;

  FedExZone.findOneAndDelete({ country })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};
