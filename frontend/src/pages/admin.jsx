import { useState } from "react"
import api from "../components/api"
import { useNavigate } from "react-router-dom"
import AdminCard from "../components/adminCard"
export default function Admin()
{
    const[start,setStart]=useState('')
    const[end,setEnd]=useState('')
    const[dis,setDis]=useState(false)
    const[orders,setOrders]=useState([])
    const nav=useNavigate()

    function logout()
    {
        sessionStorage.removeItem('name')
        nav('/login')
    }

    async function submit()
    {
        console.log(start)
        const orders={
            "start":new Date(start).toISOString(),
            "end":new Date(end).toISOString(),
            "req":"admin"
        }
        try {
          const response=await api.post('/getAdmin',orders)  
          console.log(response.data)
          setOrders(response.data)
          setDis(true)
        } catch (error) {
            console.log(error)
        }
    }
    return(<div className="grid">
        <header className="flex text-center bg-white h-20 justify-between items-center text-5xl font-bold text-blue-950 p-10">ADMIN CONSOLE
        <button className="h-10 px-4 text-xl font-extrabold bg-blue-900 text-white border-2 border-blue-900 hover:bg-white hover:text-black" onClick={logout}>LOGOUT</button>
        </header>
        <div className="mx-auto">
        <input type="date" className="field" onChange={(e)=>{setStart(e.target.value)}}/>
        <input type="date" className="field" onChange={(e)=>{setEnd(e.target.value)}}/>
        </div>
        <button className="lrbtn mx-auto rounded-xl" onClick={submit}>CHECK</button>
        {
            dis?
            <div>
                {
                    orders.map((customer)=>
                        <AdminCard
                        name={customer.name}
                        email={customer.email}
                        orderno={customer.orderno}
                        date={customer.date}
                        status={customer.status}
                        item={customer.item}
                        />
                    )
                }
            </div>
            :
            <div className="mx-auto p-10 font-mono font-bold text-2xl">ENTER THE START AND END DATE TO GET THE ORDERS</div>
        }
    </div>)
}