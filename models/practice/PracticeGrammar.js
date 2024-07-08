const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const practiceGrammarSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    optionA: {
        type: String,
        required: true
    },
    optionB: {
        type: String,
        required: true
    },
    optionC: {
        type: String,
        required: true
    },
    optionD: {
        type: String,
        required: true
    },
    correct: {
        type: String,
        required: true
    }
});

module.exports = practiceGrammarSchema;