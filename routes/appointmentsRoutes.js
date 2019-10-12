const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// endpoint api/appointments
router.get('/:date', ctrl.appointments.showAppointmentsThisDay);
router.post('/', ctrl.appointments.createAppointment);
router.delete('/:id', ctrl.appointments.deleteAppointment);

module.exports = router;
