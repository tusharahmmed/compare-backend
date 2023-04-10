const Provider = require("../models/providerModel");
/**
 * root route: '/providers'
 */

/**
 * router routes: '/'
 * method: "Get",
 * params: null,
 * response: get all provider collection
 */
exports.getAllProvider = (req, res) => {
  Provider.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: "something error occurred" });
    });
};

/**
 * router routes: '/:name'
 * method: "Get",
 * params: null,
 * response: get all provider collection
 */
exports.getProviderByName = (req, res) => {
  const {name} = req.params;
  Provider.findOne({providerName: name})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: "something error occurred" });
    });
};

/**
 * router routes: '/'
 * method: "Post",
 * params: obj,
 * response: add new provider to collection
 */
exports.addNewProvider = (req, res) => {
  let { providerName, fsc, rates } = req.body;

  let provider = new Provider({ providerName, fsc, rates });

  // save to db
  provider
    .save()
    .then((dbResponse) => {
      // after save then get all contact
      res.json(dbResponse);
    })
    .catch((error) => {
      res.json(error);
    });
};

/**
 * router routes: '/:name'
 * method: "PUT",
 * params: obj:{data},
 * response: updat provider by id to collection
 */
exports.updateProviderByName = (req, res) => {
  let { name } = req.params;
  let { providerName, fsc, rates } = req.body;

  // Update
  Provider.findOneAndUpdate(
    { providerName: name },
    {
      $set: {
        providerName,
        fsc,
        rates,
      },
    },
    { new: true }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.json(error));
};

/**
 * router routes: '/:name'
 * method: "delete",
 * params: id,
 * response: delete provider by id from collection
 */
exports.deleteProviderByName = (req, res) => {
  let { name } = req.params;

  Provider.findOneAndDelete({ providerName: name })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: "something error occurred" });
    });
};
