
const User_Apps = require('../models/User_Apps')
class AppsController {
    async addApps(req,res){
        if (Array.isArray(req.body.apps)) {
            const contactsWithID = req.body.apps.map(contact => ({ ...contact, ID: req.body.ID }));
            User_Apps.insertMany(contactsWithID)
                .then(savedContacts => {
                    console.log('Приложения успешно сохранены');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении Приложений:', error);
                });
        } else {
            const contactWithID = { ...req.body.apps, ID: req.body.ID };
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