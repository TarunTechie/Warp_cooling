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
            else
            {
                return({"state":"Wrong"})
            }
        }
        else
        {
            return("Wrong Credentials")
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
        
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports={login,register,checkout}