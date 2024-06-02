import { useEffect, useState } from "react"
import Top from "../components/top"
import CartCard from "../components/cartCard"
import api from "../components/api"
import { useNavigate } from "react-router-dom"
export default function Cart()
{
    const[list,setList]=useState([])
    const nav=useNavigate()
    function getitems()
    {
        let temp=[]
        for(let i=1;i<=localStorage.getItem('number');i++)
            {
                console.log(i)
                temp.push(JSON.parse(localStorage.getItem(i)))
            }
            setList(temp)
            console.log(list)
    }
    useEffect(getitems,[])
    async function checkout()
    {
        const date=new Date()
        const orderdate=date.getDate().toString()+'-'+(date.getMonth()+1).toString()+'-'+date.getFullYear().toString()
        const number=Math.floor(Math.random()*(100-10)+10)+orderdate.replace('-','')
        const price=1000*localStorage.getItem('number')
        const orderdetails={
            'item':list,
            'orderno':number,
            'price':price,
            'date':orderdate,
            'status':"Order Placed",
            'id':sessionStorage.getItem('userid')
        }
        console.log(orderdetails)
        try{
            const response=await api.post('/checkout',orderdetails)
            console.log(response.data)
            if(response.data=='placed')
            nav('/order')
        }
        catch(error)
        {
            console.log(error)
        }
    }
    return(
        <div>
            <Top/>
            <div className="mt-44 text-center flex justify-center items-center">
                <h1 className="text-4xl heading">YOUR CART</h1>
                <img src="/cart_heading.svg" className="h-20 ml-4"/>
            </div>
            <div className="mt-10 grid justify-center">
                {
                    list.map((item,index)=>(
                        <CartCard
                        image={item.image}
                        heading={item.heading}
                        />))
                }
                </div>
                <button className="flex bg-blue-800 text-white px-4 py-2 rounded-xl items-center font-extrabold border-2 border-blue-950 mx-auto" onClick={checkout}>
                    <h1>CHECKOUT</h1>
                    <img src="/checkout.svg" className="h-10"/>
                </button>
        </div>
    )
}