const express=require('express')
const mongo=require('mongoose')
const app= express()
const user=require('./database/mongo')
app.use(express.json())

mongo.connect('mongodb://localhost:27017/wrap')


app.get('/login',async(req,res)=>{
    await user.login('hello')
})
app.listen(5000,()=>{console.log("Server running")})