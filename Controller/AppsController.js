
const User_Apps = require('../models/User_Apps')
class AppsController {
    async addApps(req,res){
        const appsWithID = { 
            ID: req.body.ID, 
            apps: req.body.apps 
        };
        User_Apps.findOneAndUpdate(
            { ID: req.body.ID }, // Условие поиска по ID
            { $addToSet: { apps: { $each: contactsWithID.apps } } }, // Добавляем новые контакты к массиву apps
            { upsert: true, new: true } // Параметры: создать новую запись, если не найдено совпадений
        )
        .then(savedContacts => {
            console.log('Приложения успешно сохранены:', savedContacts);
        })
        .catch(error => {
            console.error('Ошибка при сохранении Приложений:', error);
        });
    }
}

module.exports = new AppsController();