const mongo=require('mongoose')
const order=new mongo.Schema({
    orderno:String,
    item:String,
    date:Date,
    status:Boolean
})
const userSchema=new mongo.Schema({
    name:String,
    password:String,
    orders:[order]
})

const model=mongo.model('users',userSchema)
module.exports=model