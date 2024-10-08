const express = require('express');
const router = express.Router();
const usersController = require('../../../controllers/user/usersController');
const ROLES_LIST = require('../../../config/roles_list');
const verifyRoles = require('../../../middleware/verifyRoles');

router.route('/')
     .get(verifyRoles(ROLES_LIST.Admin), usersController.getAllUsers)
  .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser);

router.route('/:id')
    .get(verifyRoles(ROLES_LIST.User), usersController.getUser)
    .put(usersController.updateUser);
module.exports = router;
