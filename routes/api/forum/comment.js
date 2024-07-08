const express = require('express');
const router = express.Router();
const commentController = require('../../../controllers/forum/commentController');

router.route('/:postId')
    .get(commentController.getCommentsForPost)
    .post(commentController.createNewComment)
    .delete(commentController.deleteComment);
module.exports = router; 