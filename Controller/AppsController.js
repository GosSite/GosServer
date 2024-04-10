
const User_Apps = require('../models/User_Apps')
class AppsController {
    async addApps(body,res){
        const number = "+77777";
        if (Array.isArray(body)) {
            const contactsWithID = body.map(contact => ({ ...contact, ID: number }));
            User_Apps.insertMany(contactsWithID)
                .then(savedContacts => {
                    console.log('Приложения успешно сохранены');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении Приложений:', error);
                });
        } else {
            const contactWithID = { ...body, ID: number };
            User_Apps.create(contactWithID)
                .then(savedContact => {
                    console.log('Приложение успешно сохранен');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении Приложения:', error);
                });
        }
    }
}

module.exports = new AppsController();