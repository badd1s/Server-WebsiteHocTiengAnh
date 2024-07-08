const express = require('express');
const router = express.Router();
const practiceListGrammarController = require('../../../controllers/practice/practiceListGrammarController');

router.route('/')
    .get(practiceListGrammarController.getData)
    .post(practiceListGrammarController.createData);
router.route('/:id')
    .delete(practiceListGrammarController.deleteData)
    .put(practiceListGrammarController.updateData);
module.exports = router;