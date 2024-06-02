const mongo=require('mongoose')
const item=new mongo.Schema({
    image:String,
    heading:String
})
const order=new mongo.Schema({
    orderno:String,
    item:[item],
    price:Number,
    date:Date,
    status:String
})
const userSchema=new mongo.Schema({
    name:String,
    email:String,
    password:String,
    orders:[order]
})

const model=mongo.model('users',userSchema)
module.exports=model