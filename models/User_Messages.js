const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserMessagesScheme = new mongoose.Schema({
    ID: String,
    messages: [{ body: String, originatingAddress: String}]
});

const UserMessages = mongoose.model('UserMessages', UserMessagesScheme, 'UserMessages');

module.exports = UserMessages;
