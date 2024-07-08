const ScoreVocab = require('../../models/user/ScoreVocab')
const ScoreGram = require('../../models/user/ScoreGram')

// Lấy điểm cao nhất
const getScoreVocab = async (req, res) => {
    const { userId, exerciseId } = req.params;
    try {
        // Điểm cao nhất
        const highestScore = await ScoreVocab.findOne({ userId, exerciseId }).sort({ score: -1 });

        res.json(highestScore);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const getScoreGram = async (req, res) => {
    const { userId, exerciseId } = req.params;
    try {
        // Điểm cao nhất
        const highestScore = await ScoreGram.findOne({ userId, exerciseId }).sort({ score: -1 });

        res.json(highestScore);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Lấy điểm gần nhất 
const getScoreLastestVocab = async (req, res) => {
    const { userId, exerciseId } = req.params;
    try {
        // Điểm cao nhất
        const lastestScore = await ScoreVocab.findOne({ userId, exerciseId }).sort({ score: -1 });

        res.json(lastestScore);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const getScoreLastestGram = async (req, res) => {
    const { userId, exerciseId } = req.params;
    try {
        // Điểm cao nhất
        const lastestScore = await ScoreGram.findOne({ userId, exerciseId }).sort({ score: -1 });

        res.json(lastestScore);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Cập nhật điểm số
const updateScoreVocab = async (req, res) => {
    const { userId, exerciseId, newScore } = req.body;

    try {
        const userScore = await ScoreVocab.findOneAndUpdate(
            { userId, exerciseId },
            { $max: { score: newScore }, lastScore: newScore }, // Chỉ cập nhật nếu newScore lớn hơn score hiện tại
            { new: true, upsert: true } // new: đã cập nhật, upsert: tạo mới nếu không tồn tại
        );

        res.json(userScore);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateScoreGram = async (req, res) => {
    const { userId, exerciseId, newScore } = req.body;

    try {
        const userScore = await ScoreGram.findOneAndUpdate(
            { userId, exerciseId },
            { $max: { score: newScore }, lastScore: newScore }, // Chỉ cập nhật nếu newScore lớn hơn score hiện tại
            { new: true, upsert: true }// new: đã cập nhật, upsert: tạo mới nếu không tồn tại
        );

        res.json(userScore);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getScoreGram,
    getScoreVocab,
    updateScoreVocab,
    updateScoreGram,
    getScoreLastestVocab,
    getScoreLastestGram
}
