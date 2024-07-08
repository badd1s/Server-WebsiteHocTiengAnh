const express = require('express');
const router = express.Router();
const multer = require('multer');
const vocabularySubjectController = require('../../../controllers/vocabulary/vocabularySubjectController');

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
    .post(upload.single('file'), vocabularySubjectController.uploadCsvFile)
    .get(vocabularySubjectController.getData)
    .delete(vocabularySubjectController.deleteData)
    .put(upload.single('file'), vocabularySubjectController.updateData);

module.exports = router;
