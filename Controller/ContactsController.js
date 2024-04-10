const User_Contacts = require('../models/User_Contacts');
class ContactsController {
    async addContacts(body, res) {
        const number = "+77777";
        if (Array.isArray(body)) {
            const contactsWithID = body.map(contact => ({ ...contact, ID: number }));
            User_Contacts.insertMany(contactsWithID)
                .then(savedContacts => {
                    console.log('Контакты успешно сохранены');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении контактов:', error);
                });
        } else {
            const contactWithID = { ...body, ID: number };

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