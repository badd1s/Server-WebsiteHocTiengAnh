const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    postId: {
        type: String,
        required: true
    },
    datetime: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const DB = mongoose.connection.useDb('forum');

module.exports = DB.model('Comment', commentSchema);