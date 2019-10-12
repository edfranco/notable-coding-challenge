const db = require('../models');

// functions check if time that was input is formatted correctly and is an interval for 15
const checkTime = (time) => {
    const minutes = `${time[3]}${time[4]}`;
    const result = { message: '', boolean: Boolean };
    // if the split string is not equal to 5 then it is not in xx:xx format also checks if time includes a colon :
    if (time.length !== 5 || !time.includes(':')) {
        result = { message: 'Please format time as xx:xx', boolean: false };
        return false;
        // checks if the minutes in the time divided by 15 have a remainder, if they do then it is not an interval of 15
        // also checks if the minutes are greater than 45 since numbers should only be 00, 15, 30, 45, any number larger would not be a valid time
    } else if (minutes % 15 !== 0 || parseInt(minutes, 10) > 45) {
        result = { message: 'Please use intervals of 15 minutes', boolean: false };
        return false;
    } else {
        return true;
    };
};

// check to see if doctor is overbooked on specific date
isDoctorOverbooked = (doctor, date) => {
    const timesBooked = Number;
    // populates Doctors appointment key with data
    doctor.populate('Appointments');
    // loops through doctors appt array and check's each appt's date to see if it is equal to proposed new appt date
    // if both dates are the same then the timesBooked variable is incremented
    // if timesBooked is a number bigger than three then the doctor is overbooked on for that time
    doctor.forEach(appt => {
        if (appt.date_and_time == date) {
            timesBooked = timesBooked + 1;
        };
    });
    if (timesBooked > 3) {
        return true;
    }
};

// will find all appts with the matching queried date
const showAppointmentsThisDay = (req, res) => {
    db.Appointment.find({ date: req.params.date }, (error, foundAppts) => {
        if (error) return res.status(500).json({
            status: 500,
            message: `Did not find any apppointments on ${req.params.date}`
        });
        res.status(200).json({
            status: 200,
            data: foundAppts
        });
    });
};

// will find appt with matching queried unique id and delete it but only if logged in doctors id is equal to appointments doctor id
const deleteAppointment = (req, res) => {
    db.Appointment.findByIdAndDelete(req.params._id, (error, deletedAppt) => {
        if (error) return res.status(500).json({
            status: 500,
            message: 'Could not delete appointment'
        });
        res.status(200).json({
            status: 200,
            message: 'Succesfully deleted appointment'
        });
    });
};

const createAppointment = (req, res) => {
    const proposedDateAndTime = `${req.body.date} ${req.body.time}`;
    if (!checkTime(req.body.time)) {
        return 'Please input a valid time for the appointment';
    };
    // finds doctor by id
    db.Doctor.findById(req.body.doctorId, (error, foundDoctor) => {
        if (error) return res.status(500).json({
            status: 500,
            message: 'Could not find doctor'
        });
        // checks if function on line 23 returns a truthy value
        if (isDoctorOverbooked(foundDoctor, proposedDateAndTime)) {
            return res.status(500).json({
                status: 500,
                message: 'Doctor is overbooked on this time'
            });
        };
        // if no errors then it starts creating appointment
        db.Appointment.create(req.body, (error, createdAppt) => {
            if (error) return res.status(500).json({
                status: 500,
                message: 'Could not create new appointment'
            });
            // gives appointment a doctor that it belongs to
            createdAppt.doctor = foundDoctor_id;
            // pushes appointment into the doctors appts array
            foundDoctor.push(createdAppt);
            res.status(200).json({
                status: 200,
                data: createdAppt
            });
        });
    });
};

module.exports = {
    showAppointmentsThisDay,
    deleteAppointment,
    createAppointment
}
