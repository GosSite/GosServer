const express = require("express")
const app = express()
const UserRouter = require('./Routes/UserRouter')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use('/user', UserRouter)
app.use(express.json());
app.get('/',(req,res)=>{
    console.log('react native')
    res.send("Welcome to server")
})

app.listen(PORT, ()=>{
    console.log("server start at "+ PORT)
})