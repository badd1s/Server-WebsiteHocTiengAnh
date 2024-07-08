const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grammarLessonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mean: {
        type: String
    },
    use_1: {
        type: String
    },
    use_2: {
        type: String
    },
    use_3: {
        type: String
    },
    use_4: {
        type: String
    },
    use_5: {
        type: String
    },
    use_6: {
        type: String
    },
    classification_1: {
        type: String
    },
    classification_2: {
        type: String
    },
    classification_3: {
        type: String
    },
    classification_4: {
        type: String
    },
    classification_5: {
        type: String
    },
    classification_6: {
        type: String
    },
    structure_1: {
        type: String
    },
    structure_2: {
        type: String
    },
    structure_3: {
        type: String
    },
    structure_4: {
        type: String
    },
    structure_5: {
        type: String
    },
    structure_6: {
        type: String
    },
    structure_7: {
        type: String
    },
    example_1: {
        type: String
    },
    example_2: {
        type: String
    },
    example_3: {
        type: String
    },
    example_4: {
        type: String
    },
    example_5: {
        type: String
    },
    example_6: {
        type: String
    },
    example_7: {
        type: String
    },
    sign_1: {
        type: String
    },
    sign_2: {
        type: String
    },
    sign_3: {
        type: String
    },
    sign_4: {
        type: String
    },
    sign_5: {
        type: String
    },
    sign_6: {
        type: String
    }
});

module.exports = grammarLessonSchema;