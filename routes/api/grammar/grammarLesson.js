const express = require('express');
const router = express.Router();
const multer = require('multer');
const grammarLessonController = require('../../../controllers/grammar/grammarLessonController');

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
    .post(upload.single('csvFile'), grammarLessonController.uploadCsvFile)
    .get(grammarLessonController.getData)
    .delete(grammarLessonController.deleteData)
    .put(upload.single('csvFile'), grammarLessonController.updateData);

module.exports = router;
