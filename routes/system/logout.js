const express = require('express');
const router = express.Router();
const logoutController = require('../../controllers/system/logoutController');

router.get('/', logoutController.handleLogout);

module.exports = router;