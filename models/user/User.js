const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 2024
        },
        Admin: Number
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
});

const accountsDB = mongoose.connection.useDb('accounts');

module.exports = accountsDB.model('User', userSchema);