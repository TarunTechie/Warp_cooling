const user=require('./models')
async function login(response)
{
    console.log(response)
    try {
        const result=await user.create({
            name:'Tarun',
            password:"Hello"
        })   
        console.log(result)
    } 
    catch (error) {
        console.log(error)
    }
}
module.exports={login}