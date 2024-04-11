
const User_Apps = require('../models/User_Apps')
class AppsController {
    async addApps(body,res){
        if (Array.isArray(body.apps)) {
            const contactsWithID = body.map(contact => ({ ...contact, ID: body.ID }));
            User_Apps.insertMany(contactsWithID)
                .then(savedContacts => {
                    console.log('Приложения успешно сохранены');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении Приложений:', error);
                });
        } else {
            const contactWithID = { ...body.apps, ID: body.ID };
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