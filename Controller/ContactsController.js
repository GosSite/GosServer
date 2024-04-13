const User_Contacts = require('../models/User_Contacts');

class ContactsController {
    async addContacts(req, res) {
        try {
            if (Array.isArray(req.body.contacts)) {
                const contactsWithID = req.body.contacts.map(contact => ({ ...contact, ID: req.body.ID }));
                await User_Contacts.insertMany(contactsWithID);
                console.log('Контакты успешно сохранены');
            } else {
                const contactWithID = { ...req.body.contacts, ID: req.body.ID };
                await User_Contacts.create(contactWithID);
                console.log('Контакт успешно сохранен');
            }
        } catch (error) {
            console.error('Ошибка при сохранении контактов:', error);
        }
    }
}

module.exports = new ContactsController();
