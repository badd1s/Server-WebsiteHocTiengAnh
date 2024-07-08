const express = require('express');
const router = express.Router();
const scoreController = require('../../../controllers/user/scoreController');

router.route('/:userId/:exerciseId')
    .get(scoreController.getScoreGram)
    .get(scoreController.getScoreLastestGram);

router.route('/updateScoreGram')
    .post(scoreController.updateScoreGram);

module.exports = router;