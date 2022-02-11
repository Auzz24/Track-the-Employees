const express = require('express');
const router = express.Router();

router.use(require('./employeeRoutes'));
router.use(require('./rollRoutes'));
router.use(require('./departmentRoutes'));

module.exports = router;