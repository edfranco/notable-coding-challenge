const db = require('../models');

// shows all doctors
const indexDoctors = (req, res) => {
    db.Doctor.find({}, (error, allDoctors) => {
        if (error) return res.status(500).json({
            status: 500,
            message: 'There was an error. Try again'
        });
        res.status(200).json({
            status: 200,
            data: allDoctors
        });
    });
};

// will show one doctor but will only show appointments
const showDoctorCalendar = (req, res) => {
    db.Doctor.findById(req.params.id, (error, foundDoctor) => {
        if (error) return res.status(500).json({
            status: 500,
            message: 'Did not find doctor'
        });
        res.status(200).json({
            status: 200,
            data: foundDoctor.appointments
        });
    });
};



module.exports = {
    indexDoctors,
    showDoctorCalendar
}