const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// endpoint api/doctors
// shows all doctors
router.get('/', ctrl.doctors.indexDoctors);
// creates a doctor
router.post('/', ctrl.doctors.createDoctor);
// shows one doctors calendar
router.get('/:id', ctrl.doctors.showDoctorCalendar);
// deletes a doctor
router.delete('/:id', ctrl.doctors.deleteDoctor);


module.exports = router;