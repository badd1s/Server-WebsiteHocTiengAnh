const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/system/registerController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.post('/', registerController.handleNewUser);

router.route('/admin')
    .post(verifyRoles(ROLES_LIST.Admin), registerController.handleNewAdmin);

module.exports = router;