const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patient_first_name: {
        type: String,
    },
    patient_last_name: {
        type: String,
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    date_and_time: {
        type: String,
        default: `${this.date} ${this.time}`
    },
    kind: {
        type: String,
        default: 'New Patient'
    },
    // all appointments belong to a doctor
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    }

});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;