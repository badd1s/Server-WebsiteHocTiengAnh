const express = require('express');
const router = express.Router();
const grammarListController = require('../../../controllers/grammar/grammarListController');

router.route('/')
    .get(grammarListController.getData)
    .post(grammarListController.createData);
router.route('/:id')
    .delete(grammarListController.deleteData)
    .put(grammarListController.updateData);
module.exports = router;