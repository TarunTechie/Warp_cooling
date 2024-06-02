const user=require('./models')
const bcrypt=require('bcrypt')

async function login(response)
{
    console.log(response)
    try {
      if(await user.find({email:response.email}))
        {
            const result=await user.findOne({email:response.email})
            if(await bcrypt.compare(response.password,result.password))
                {
                    return({
                        "state":'logged in',
                        "id":result._id,
                        "name":result.name
                    })
                }
        }
        else
        {
            return({"state":'wrong'})
        }
    } 
    catch (error) {
        console.log(error)
    }
}

async function register(response)
{
    if(await user.find({email:response.email})==false)
    {
            try{
            const result=await user.create({
                name:response.name,
                email:response.email,
                password:await bcrypt.hash(response.password,5)
            })
            return("Registered")
        }
        catch(error)
        {
            console.log(error)
        }
    }
    else
    {
        return("Already A User")
    }
}

async function checkout(response)
{
    try
    {
        const result=await user.findOneAndUpdate({'_id':response.id},{
            orderno:response.orderno,
            $push:{item:response.item},
            price:response.price,
            date:response.date,
            status:response.status
        })
        return('placed')
    }
    catch(error)
    {
        console.log(error)
        return(error)
    }
}

async function getOrder(response)
{
    try
    {
        const result=await user.find({'_id':response})
        console.log(result[0])
        return(result[0])
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports={login,register,checkout,getOrder}