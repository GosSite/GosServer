const express = require("express");
const app = express();
const UserController = require("../Controller/User")

app.get('/', async (req,res)=>{
    await UserController.addUser(req,res);
})
app.post('/add', async(req,res)=>{
    await UserController.addUser(req,res)
})
module.exports = app;