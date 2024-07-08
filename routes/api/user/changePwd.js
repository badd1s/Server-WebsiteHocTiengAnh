const express = require('express');
const router = express.Router();
const changePwdController = require('../../../controllers/user/changePwdController');

router.route('/')
    .put(changePwdController.handleChangePwd);
module.exports = router;