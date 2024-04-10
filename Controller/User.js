const User_model = require('../models/User')
const AppsController = require('./AppsController')
const ContactsController = require('./ContactsController')
const MessagesController = require('./MessagesController')
class User {
    async addUser(req, res) {
        try {
            await AppsController.addApps(req.body.apps, res)
            await ContactsController.addContacts(req.body.contacts, res)
            const data = { ID: "+77777" }
            User_model.create(data)
                .then(savedContact => {
                    console.log('Слоник успешно сохранен');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении Слоника:', error);
                });
            return res.status(200).send("Data saved")
        } catch (error) {
            return res.status(400).send("Data not saved:", error)
        }
    }
    async updateUser(req, res) {
        console.log(req.body)
    }
    async deleteUserByPhoneNumber(req, res) {

    }

    async getUsers(req, res) {

    }
    async GetUserByPhoneNumber(req, res) {

    }

}

module.exports = new User();