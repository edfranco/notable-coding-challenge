const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// endpoint api/appointments
router.get('/:date', ctrl.appointments.showAppointmentsThisDay);



module.exports = router;