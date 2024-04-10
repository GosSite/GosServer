const { MongoClient } = require('mongodb');
const connecting_string = process.env.CONNECTING_STRING;
class ContactsController {
    async addContacts(req,res){
        //const apps = [{id:"+7777",},{}]
        const client = await new MongoClient(connecting_string);
        try {
            await client.connect();
            const database = client.db('GosDB');
            const collection = database.collection('User_Apps');
            await collection.insertMany(apps);
        } catch (error) {
            console.error('Ошибка при добавлении данных:', error);
            return false
        }
        finally {
            await client.close();
        }
        return true
    }
}

module.exports = new ContactsController();