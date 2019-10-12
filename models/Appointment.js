const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patient_first_name: {
        type: String,
    },
    patient_last_name: {
        type: String,
    },
    time_of_appt: {
        type: String
    },

});

const Appointment = mongoose.model('Doctor', AppointmentSchema);

module.exports = Appointment;