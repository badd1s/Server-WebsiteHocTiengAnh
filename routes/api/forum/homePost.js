const express = require('express');
const router = express.Router();
const forumController = require('../../../controllers/forum/forumController');

router.route('/')
    .get(forumController.getHomePost)
    .post(forumController.createNewPost);
router.route('/:id')

    .delete(forumController.deletePostAndComments)
    .put(forumController.updatePost);
module.exports = router; 