const User = require('../../models/user/User');

// Admin
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(204).json({ 'message': 'No users found' });
        res.json(users);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

const deleteUser = async (req, res) => {
    const { userId } = req.body;
    try {
        const deleteUser = await User.findByIdAndDelete(userId);
        if (!deleteUser) return res.status(204).json({ 'message': 'No users found' });
        res.json('Delete success');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// User
const getUser = async (req, res) => {
    try {
        if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
        const user = await User.findOne({ _id: req.params.id }).exec();
        if (!user) return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
        res.json(user);
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
}

const updateUser = async (req, res) => {
    try {
        if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
        const updatedUser = await User.findByIdAndUpdate({ _id: req.params.id }, {
            name: req.body.name
        }, { new: true } // Return the updated user
        );
        if (!updatedUser) return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
}

module.exports = {
    getAllUsers,
    deleteUser,
    getUser,
    updateUser
}