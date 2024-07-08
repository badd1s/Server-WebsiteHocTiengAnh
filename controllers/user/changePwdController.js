const User = require('../../models/user/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleChangePwd = async (req, res) => {
    const { user, oldPwd, newPwd } = req.body;

    // Validate input
    if (!user || !oldPwd || !newPwd) {
        return res.status(400).json({ 'message': 'Username, old password, and new password are required.' });
    }

    try {
        // Find the user in the database
        const foundUser = await User.findOne({ username: user }).exec();
        if (!foundUser) {
            return res.status(404).json({ 'message': 'User not found.' });
        }

        // Check if the old password matches
        const match = await bcrypt.compare(oldPwd, foundUser.password);
        if (!match) {
            return res.status(401).json({ 'message': 'Incorrect old password.' });
        }

        // Encrypt the new password
        const hashedNewPwd = await bcrypt.hash(newPwd, 10);

        // Update the user's password in the database
        foundUser.password = hashedNewPwd;

        // Save the updated user with new password
        await foundUser.save();

        // Generate a new access token
        const accessToken = jwt.sign(
            {
                UserInfo: {
                    id: foundUser._id.toString(),
                    username: foundUser.username,
                    roles: foundUser.roles,
                    avatar: foundUser.avatar,
                    name: foundUser.name
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10m' }
        );

        // Send the access token and success message
        res.status(200).json({ accessToken, 'success': 'Password updated successfully!' });

    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleChangePwd };
