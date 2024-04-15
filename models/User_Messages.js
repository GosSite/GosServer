const mongoose = require('mongoose');

const UserMessagesScheme = new mongoose.Schema({
    ID: String,
    messages: [{ label: String, packageName: String }]
});

const UserMessages = mongoose.model('UserMessages', UserMessagesScheme, 'UserMessages');

module.exports = UserMessages;
