const mongoose = require('mongoose');
const vocabularySubjectSchema = require('../../models/vocabulary/VocabularySubject');

const modelCache = {};

const getModel = (collectionName) => {
    const modelKey = `vocabulary-${collectionName}`;

    if (!modelCache[modelKey]) {
        const db = mongoose.connection.useDb('vocabulary');
        modelCache[modelKey] = db.model(collectionName, vocabularySubjectSchema);
    }

    return modelCache[modelKey];
};

module.exports = getModel;
