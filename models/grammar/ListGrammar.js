const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listGrammarSchema = new Schema({
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

const DB = mongoose.connection.useDb('grammar');

module.exports = DB.model('lists', listGrammarSchema);