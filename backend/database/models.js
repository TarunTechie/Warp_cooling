const mongo=require('mongoose')
const item=new mongo.Schema({
    image:String,
    heading:String
})
const userSchema=new mongo.Schema({
    name:String,
    email:String,
    password:String,
    orderno:String,
    item:[item],
    price:Number,
    date:Date,
    status:String
})

const model=mongo.model('users',userSchema)
module.exports=model