const User_model = require('../models/User')
const User_Contacts = require('../models/User_Contacts');
const User_Apps = require('../models/User_Apps');
const AppsController = require('./AppsController')
const ContactsController = require('./ContactsController')
class User {
    async addUser(req, res) {
        try {
            const existingUser = await User_model.findOne({ ID: req.ID });
            if (existingUser) {
                return res.status(400).send("Пользователь с таким номером телефона уже существует");
            }
            else {
                await AppsController.addApps(req, res)
                await ContactsController.addContacts(req, res)
                const user_ID = req.ID
                User_model.create(user_ID)
                    .then(savedContact => {
                        console.log('Слоник успешно сохранен');
                    })
                    .catch(error => {
                        console.error('Ошибка при сохранении Слоника:', error);
                    });
                return res.status(200).send("Data saved")
            }
        } catch (error) {
            return res.status(400).send(`Data not saved: ${error}`)
        }
    }
    async updateUser(req, res) {
        console.log(req.body)
    }
    async deleteUserByPhoneNumber(req, res) {

    }
    async getUsers(req, res) {
        try {
            const users = await User_model.find({});
            return res.status(200).send(users)
        } catch (error) {
            return res.status(400).send(`Cannot get users: ${error}`)
        }
    }
    async GetUserByPhoneNumber(req, res) {
        try {
            const userCustomId = "+" + req.params.phoneNumber;
            const user = await User_model.findOne({ ID: userCustomId });
            if (!user) {
                return res.status(404).send('Пользователь не найден');
            }
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send('Ошибка при получении пользователя по пользовательскому ID');
        }
    }
    async getUserData(req, res) {
        try {
            const userId = "+" + req.params.phoneNumber;

            const userContacts = await User_Contacts.find({ ID: userId });

            const userApps = await User_Apps.find({ ID: userId });

            res.status(200).send({ userContacts, userApps });
        } catch (error) {
            console.error('Ошибка при получении данных пользователя:', error);
            res.status(500).send('Ошибка при получении данных пользователя');
        }
    }
}

module.exports = new User();