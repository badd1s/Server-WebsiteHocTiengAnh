const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listVocabularySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    datetime: {
        type: String,
        required: true
    },
    collectionName: {
        type: String,
        required: true
    }
});

const DB = mongoose.connection.useDb('vocabulary');

module.exports = DB.model('lists', listVocabularySchema);