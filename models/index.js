const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/notable';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`MongoDB is connected at port ${DB_URL}`))
    .catch(() => console.log('MongoDB is not connected'));

module.exports = {
    Test: require('./Test'),
    Doctor: require('./Doctor'),
    Appointment: require('./Appointment')
};
