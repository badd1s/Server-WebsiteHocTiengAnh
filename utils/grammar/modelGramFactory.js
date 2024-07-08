const mongoose = require('mongoose');
const grammarLessonSchema = require('../../models/grammar/GrammarLesson');

const modelCache = {};

const getModel = (collectionName) => {
    const modelKey = `grammar-${collectionName}`;

    if (!modelCache[modelKey]) {
        const db = mongoose.connection.useDb('grammar');
        modelCache[modelKey] = db.model(collectionName, grammarLessonSchema);
    }

    return modelCache[modelKey];
};

module.exports = getModel;
