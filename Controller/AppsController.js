const User_Apps = require('../models/User_Apps');

class AppsController {
    async addApps(req, res) {
        try {
            console.log("save apps")
            const savedApps = await User_Apps.findOneAndUpdate(
                { ID: req.body.ID }, // Search condition by ID
                { $addToSet: { apps: { $each: req.body.apps } } }, // Add new apps to the 'apps' array
                { upsert: true, new: true } // Options: create a new record if no matches are found
            );
            console.log('Приложения успешно сохранены:', savedApps);
        } catch (error) {
            console.error('Ошибка при сохранении Приложений:', error);
        }
    }
}

module.exports = new AppsController();
