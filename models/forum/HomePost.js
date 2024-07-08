const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homePostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    datetime: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    authorAvatar: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    }
});

const DB = mongoose.connection.useDb('forum');

module.exports = DB.model('Home', homePostSchema);