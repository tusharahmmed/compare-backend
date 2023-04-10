/**
 * root route: '/dollar-rate'
 */
const DollarExchange = require("../models/dollerExchangeModel");

/**
 * router route: "/"
 * method: "GET",
 * res: get exchange rate
 */
exports.getDollarRate = (req, res) => {
  DollarExchange.find({})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "Something went wrong" }));
};

/**
 * router route: "/:id"
 * method: "GET",
 * res: get single exchange rate
 */
exports.getSingleDollarRate = (req, res) => {
  let { id } = req.params;

  DollarExchange.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "Something went wrong" }));
};
/**
 * router route: "/:id"
 * method: "PUT",
 * body: obj {exchange_rate}
 * res: update exchange rate
 */
exports.updateDollarRate = (req, res) => {
  let { id } = req.params;
  let { exchange_rate } = req.body;
  // Update
  DollarExchange.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        exchange_rate,
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
 * body: obj {exchange_rate}
 * res: add doller rate
 */
exports.addDollarRate = (req, res) => {
  const { exchange_rate } = req.body;

  let dollarRate = new DollarExchange({ exchange_rate });

  dollarRate
    .save({})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "Something went wrong" }));
};
