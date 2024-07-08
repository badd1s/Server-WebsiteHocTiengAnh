const express = require('express');
const router = express.Router();
const vocabularyListController = require('../../../controllers/vocabulary/vocabularyListController');

router.route('/')
    .get(vocabularyListController.getData)
    .post(vocabularyListController.createData);
router.route('/:id')
    .delete(vocabularyListController.deleteData)
    .put(vocabularyListController.updateData);
module.exports = router;