const User_Contacts = require('../models/User_Contacts');
class ContactsController {
    async addContacts(body, res) {
        if (Array.isArray(body.contacts)) {
            const contactsWithID = body.contacts.map(contact => ({ ...contact, ID: body.ID }));
            User_Contacts.insertMany(contactsWithID)
                .then(savedContacts => {
                    console.log('Контакты успешно сохранены');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении контактов:', error);
                });
        } else {
            const contactWithID = { ...body.contacts, ID: body.ID };

            User_Contacts.create(contactWithID)
                .then(savedContact => {
                    console.log('Контакт успешно сохранен');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении контакта:', error);
                });
        }
    }
}

module.exports = new ContactsController();