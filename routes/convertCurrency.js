const router = require('express').Router();
const { convertCurrency } = require('../controllers/convertCurrency');

router.post('/convertCurrency', convertCurrency);

module.exports = router;