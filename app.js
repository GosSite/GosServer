const express = require("express")
const app = express()
const UserRouter = require('./Routes/UserRouter')
const UserController = require('./Controller/User')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use('/user', UserRouter)
app.use(express.json());
app.get('/',(req,res)=>{
    console.log('react native')
    UserController.updateUser(req,res)
})
app.post('/',(req,res)=>{
    console.log('react native')
    UserController.updateUser(req,res)
})
app.listen(PORT, ()=>{
    console.log("server start at "+ PORT)
})