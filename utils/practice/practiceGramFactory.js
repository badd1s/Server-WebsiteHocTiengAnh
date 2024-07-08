const mongoose = require('mongoose');
const practiceGrammarSchema = require('../../models/practice/PracticeGrammar');

const modelCache = {};

const getModel = (collectionName) => {
    const modelKey = `practice_grammar_${collectionName}`;

    if (!modelCache[modelKey]) {
        const db = mongoose.connection.useDb('practice_grammar');
        modelCache[modelKey] = db.model(collectionName, practiceGrammarSchema);
    }

    return modelCache[modelKey];
};

module.exports = getModel;
