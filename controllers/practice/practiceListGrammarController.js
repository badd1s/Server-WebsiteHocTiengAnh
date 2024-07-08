
const Data = require('../../models/practice/ListPracticeGrammar');

const getData = async (req, res) => {
    try {
        const data = await Data.find();
        if (!data) return res.status(204).json({ 'message': 'Not found' })
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

const createData = async (req, res) => {
    try {

        // kiểm tra trùng lặp
        const existingData = await Data.findOne({
            title: req.body.title,
            collectionName: req.body.collectionName
        });

        if (existingData) {
            return res.status(400).json({ message: 'Trùng title và collectioName' });
        }

        const result = await Data.create({
            title: req.body.title,
            body: req.body.body,
            datetime: req.body.datetime,
            collectionName: req.body.collectionName
        });
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating' });
    }
};


const deleteData = async (req, res) => {
    try {
        const dataId = req.params.id;
        const deletedData = await Data.findByIdAndDelete(dataId);

        if (!deletedData) {
            return res.status(404).json({ message: 'Not found' });
        }

        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting' });
    }
};

const updateData = async (req, res) => {
    try {
        const dataId = req.params.id;
        const updateData = await Data.findByIdAndUpdate(dataId, {
            title: req.body.title,
            body: req.body.body,
            datetime: req.body.datetime
        }, { new: true });

        if (!updateData) {
            return res.status(404).json({ message: 'Not found' });
        }

        res.json(updateData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating' });
    }
};

module.exports = {
    getData,
    createData,
    deleteData,
    updateData
}