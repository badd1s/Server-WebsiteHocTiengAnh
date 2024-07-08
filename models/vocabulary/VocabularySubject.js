const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vocabularySubjectSchema = new Schema({
    vocabulary: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    pronunciation: {
        type: String
    },
    meaning: {
        type: String,
        required: true
    }
});

module.exports = vocabularySubjectSchema;