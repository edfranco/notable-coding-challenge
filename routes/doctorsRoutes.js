const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// endpoint api/doctors
router.get('/', ctrl.doctors.indexDoctors);
router.get('/:id', ctrl.doctors.showDoctorCalendar)


module.exports = router;