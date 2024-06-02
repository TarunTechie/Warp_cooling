const express=require('express')
const mongo=require('mongoose')
const app= express()
const cors =require('cors')
app.use(cors())
const user=require('./database/mongo')
app.use(express.json())

mongo.connect('mongodb://localhost:27017/wrap')


app.post('/login',async(req,res)=>{
    console.log("Login Request Recived")
    const response=await user.login(req.body)
    res.json(response)
})

app.post('/register',async(req,res)=>{
    console.log("Register Request Recived")
    const response=await user.register(req.body)
    res.send(response)
})

app.post('/checkout',async(req,res)=>{
    console.log("GOT ORDER")
    console.log(req.body)
})
app.listen(5000,()=>{console.log("Server running")})