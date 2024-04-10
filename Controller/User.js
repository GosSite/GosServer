const { MongoClient } = require('mongodb');
const connecting_string = 'mongodb+srv://Neural:SSeergo20039@cluster0.1hfy5sg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const AppsController = require('./AppsController')
const ContactsController = require('./ContactsController')
const MessagesController = require('./MessagesController')
class User {
    async addUser(req, res) {
        await AppsController.addApps(req.apps,res)
        await ContactsController.addContacts(req.contacts,res)
        await MessagesController.addMessages(req.messages,res)

        const data = { phonenumber: "+77777" }
        const client = await new MongoClient(connecting_string);
        try {
            await client.connect();
            const database = client.db('GosDB');
            const collection = database.collection('User');
            const result = await collection.insertOne(data);
        } catch (error) {
            console.error('Ошибка при добавлении данных:', error);
            return res.status(500).send(`User not added-\n${error}`)
        }
        finally {
            await client.close();
        }
        return res.status(200).send("User added")
    }
    async updateUser(req, res) {
        req.body.contacts.forEach(element => {
            console.log(element)
        });
    }
    async deleteUserByPhoneNumber(req, res) {

    }

    async getUsers(req, res) {

    }
    async GetUserByPhoneNumber(req, res) {

    }

}

module.exports = new User();