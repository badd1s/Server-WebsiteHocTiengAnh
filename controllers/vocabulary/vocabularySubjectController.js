const csv = require('csvtojson');
const getModel = require('../../utils/vocabulary/modelVocabFactory');
const fs = require('fs').promises;

const uploadCsvFile = async (req, res) => {
    try {
        const collectionName = req.params.collectionName;
        const modelName = getModel(collectionName);

        const jsonArray = await csv().fromFile(req.file.path);
        await modelName.insertMany(jsonArray);

        await fs.unlink(req.file.path);
        res.json('Add success');
    } catch (error) {
        res.status(500).json(error);
    }
};

const getData = async (req, res) => {
    try {
        const collectionName = req.params.collectionName;
        const modelName = getModel(collectionName);

        const data = await modelName.find();
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteData = async (req, res) => {
    try {
        const collectionName = req.params.collectionName;
        const modelName = getModel(collectionName);

        await modelName.deleteMany();
        res.json('Delete success');
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateData = async (req, res) => {
    try {
        const collectionName = req.params.collectionName;
        const modelName = getModel(collectionName);

        const jsonArray = await csv().fromFile(req.file.path);
        await modelName.deleteMany();
        await modelName.insertMany(jsonArray);

        await fs.unlink(req.file.path);
        res.json('Update success');
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = {
    uploadCsvFile,
    getData,
    deleteData,
    updateData,
};
