const User_Apps = require('../models/User_Apps');

class AppsController {
    async addApps(req, res) {
        try {
            console.log("save apps")
            await User_Apps.findOneAndUpdate(
                { ID: req.body.ID }, 
                { $addToSet: { apps: { $each: req.body.apps } } }, 
                { upsert: true, new: true } 
            );
            console.log('Приложения успешно сохранены:');
        } catch (error) {
            console.error('Ошибка при сохранении Приложений:', error);
        }
    }
}

module.exports = new AppsController();
