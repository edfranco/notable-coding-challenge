const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// endpoint api/appointments
// shows all appointments for a specific date
router.get('/:date', ctrl.appointments.showAppointmentsThisDay);
// creates a new appointment
router.post('/', ctrl.appointments.createAppointment);
// deletes an appointment
router.delete('/:id', ctrl.appointments.deleteAppointment);

module.exports = router;
