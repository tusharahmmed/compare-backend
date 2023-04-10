/**
 * root route: "/costs"
 */

const CostCollection = require("../models/costsModel");

/**
 * router route: "/"
 * method: "GET",
 * res: get costs
 */
exports.getCost = (req, res) => {
  CostCollection.find({})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "Something went wrong" }));
};

/**
 * router route: "/:id"
 * method: "GET",
 * res: get single costs
 */
exports.getSingleCost = (req, res) => {
  let { id } = req.params;

  CostCollection.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "Something went wrong" }));
};

/**
 * router route: "/:id"
 * method: "PUT",
 * body: obj {official_cost, hr_cost, transport_cost}
 * res: update exchange rate
 */
exports.updateCost = (req, res) => {
  let { id } = req.params;
  let { official_cost, hr_cost, transport_cost } = req.body;
  // Update
  CostCollection.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        official_cost,
        hr_cost,
        transport_cost,
      },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.json(error));
};

/**
 * router route: "/"
 * method: "POST",
 * body: obj {official_cost, hr_cost, transport_cost}
 * res: add exchange rate
 */
exports.addCost = (req, res) => {
  let { official_cost, hr_cost, transport_cost } = req.body;

  let costs = new CostCollection({ official_cost, hr_cost, transport_cost });
  // Update
  costs
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.json(error));
};
