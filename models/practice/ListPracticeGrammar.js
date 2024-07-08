const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listPracGrammarSchema = new Schema({
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
    collectionName: {
        type: String,
        required: true
    }
});

const DB = mongoose.connection.useDb('practice_grammar');

module.exports = DB.model('lists', listPracGrammarSchema);