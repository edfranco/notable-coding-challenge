const db = require('../models');

const showTests = (req, res) => {
    db.Test.find({}, (error, allTests) => {
        if (error) return console.log(error);
        // res.status(500).json({ status: 500, message: 'Could not find tests' })

        res.status(200).json({
            status: 200,
            data: allTests
        });
    });
};

const createTest = (req, res) => {
    db.Test.create(req.body, (error, createdTest) => {
        if (error) return res.status(500).json({ status: 500, message: 'Could not create test' });
        console.log(createdTest);
        res.status(200).json({
            status: 200,
            data: createdTest
        })
    });
};

const deleteTest = (req, res) => {
    db.Test.findByIdAndDelete(req.params.id, (error, deletedTest) => {
        if (error) return res.status(500).json({ status: 500, message: 'Could not delete' });
        console.log('Yay we deleted the test');
    });
};

module.exports = {
    createTest,
    showTests,
    deleteTest
}
