const { getAllProvider, addNewProvider, getProviderByName, updateProviderByName, deleteProviderByName } = require('../controllers/providerController');

const router = require('express').Router();

// get all provider
router.get('/',getAllProvider);

// get single provider
router.get('/:name',getProviderByName);

// add new provider 
router.post('/',addNewProvider);

// update by name 
router.put('/:name',updateProviderByName);

// delete by name 
router.delete('/:name',deleteProviderByName);



module.exports = router;