const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// endpoint api/test
router.get('/', ctrl.test.showTests);
router.post('/', ctrl.test.createTest);
router.delete('/:id', ctrl.test.deleteTest);

module.exports = router;
