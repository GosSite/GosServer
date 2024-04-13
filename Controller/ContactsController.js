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
            res.status(200).send('Контакты успешно сохранены');
        } catch (error) {
            console.error('Ошибка при сохранении контактов:', error);
            res.status(500).send('Ошибка при сохранении контактов');
        }
    }
}

module.exports = new ContactsController();
