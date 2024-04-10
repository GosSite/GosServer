const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const phoneNumberSchema = new Schema({
    id: String,
    label: String,
    number: String
});
const contactSchema = new Schema({
    ID:String,
    company: String,
    department: String,
    displayName: String,
    emailAddresses: [String],
    familyName: String,
    givenName: String,
    hasThumbnail: Boolean,
    imAddresses: [String],
    isStarred: Boolean,
    jobTitle: String,
    middleName: String,
    note: String,
    phoneNumbers: [phoneNumberSchema],
    postalAddresses: [String],
    prefix: String,
    rawContactId: String,
    recordID: String,
    suffix: String,
    thumbnailPath: String,
    urlAddresses: [String]
});

const Contact = mongoose.model('User_Contacts', contactSchema, 'User_Contacts');

module.exports = Contact;
