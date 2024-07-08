const express = require('express');
const router = express.Router();
const multer = require('multer');
const practiceGrammarController = require('../../../controllers/practice/practiceGrammarController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/files');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

router.route('/:collectionName')
    .post(upload.single('csvFile'), practiceGrammarController.uploadCsvFile)
    .get(practiceGrammarController.getData)
    .delete(practiceGrammarController.deleteData)
    .put(upload.single('csvFile'), practiceGrammarController.updateData);

module.exports = router;
