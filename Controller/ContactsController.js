const User_Contacts = require('../models/User_Contacts');

class ContactsController {
    async addContacts(req, res) {
        try {
            console.log("save contacts")
            await User_Contacts.findOneAndUpdate(
                { ID: req.body.user_data.phoneNumber },
                { $addToSet: { contacts: { $each: req.body.contacts } } }, 
                { upsert: true, new: true } 
            );
            console.log('Contacts успешно сохранены:');
        } catch (error) {
            console.error('Ошибка при сохранении контактов:', error);
        }
    }
}

module.exports = new ContactsController();
