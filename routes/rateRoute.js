const { getRate } = require('../controllers/rateController');

const router = require('express').Router();

router.post('/:providerName?zone=a',getRate);


module.exports = router;