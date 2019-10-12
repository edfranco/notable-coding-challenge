const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// endpoint api/doctors
router.get('/', ctrl.doctors.show);


module.exports = router;