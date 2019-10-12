const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;