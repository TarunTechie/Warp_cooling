const express=require('express')
const mongo=require('mongoose')
const app= express()
const cors =require('cors')
app.use(cors())
const user=require('./database/mongo')
app.use(express.json())

mongo.connect('mongodb://localhost:27017/wrap')


app.post('/login',async(req,res)=>{
    console.log(req.body)
    res.send("got it")
})
app.listen(5000,()=>{console.log("Server running")})