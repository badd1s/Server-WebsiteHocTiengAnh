const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreVocabSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    exerciseId: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    lastScore: {
        type: Number,
        default: 0
    }
});

const scoreDB = mongoose.connection.useDb('scores');

module.exports = scoreDB.model('Vocab', scoreVocabSchema);
