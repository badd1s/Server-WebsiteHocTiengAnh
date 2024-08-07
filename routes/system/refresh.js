const express = require('express');
const router = express.Router();
const refreshTokenController = require('../../controllers/system/refreshTokenController');

router.get('/', refreshTokenController.handleRefreshToken);

module.exports = router;