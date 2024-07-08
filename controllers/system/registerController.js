const User = require('../../models/user/User');
const bcrypt = require('bcrypt');


const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;

    // kiểm tra trùng lặp
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const randomNumber = Math.floor(Math.random() * 100000); // Tạo số ngẫu nhiên 
        const name = `User${randomNumber}`;

        const imgUrl = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/boy-icon.png'

        const result = await User.create({
            username: user,
            password: hashedPwd,
            avatar: imgUrl,
            name: name
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const handleNewAdmin = async (req, res) => {
    const { user, pwd } = req.body;

    // kiểm tra trùng lặp
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const randomNumber = Math.floor(Math.random() * 100000); // Tạo số ngẫu nhiên 
        const name = `User${randomNumber}`;

        const imgUrl = 'https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/young-businessman-icon.png'

        const result = await User.create({
            username: user,
            password: hashedPwd,
            avatar: imgUrl,
            name: name,
            roles: {
                Admin: 9999
            }
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    handleNewUser,
    handleNewAdmin
};