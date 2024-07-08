const express = require('express');
const router = express.Router();
const scoreController = require('../../../controllers/user/scoreController');

router.route('/:userId/:exerciseId')
    .get(scoreController.getScoreVocab)
    .get(scoreController.getScoreLastestVocab);

router.route('/updateScoreVocab')
    .post(scoreController.updateScoreVocab);

module.exports = router;