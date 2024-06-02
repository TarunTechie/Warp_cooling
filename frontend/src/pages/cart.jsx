import { useEffect, useState } from "react"
import Top from "../components/top"
import CartCard from "../components/cartCard"
import api from "../components/api"
let list=[]
export default function Cart()
{
    function getitems()
    {
        list=[]
        for(let i=1;i<=localStorage.getItem('number');i++)
            {
                console.log(i)
                list.push(JSON.parse(localStorage.getItem(i)))
            }
            list.map(item=>console.log(item.image))
    }
    useEffect(getitems,[])
    async function checkout()
    {
        const date=new Date()
        console.log(date.getDate().toString()+'-'+(date.getMonth()+1).toString()+'-'+date.getFullYear().toString())
        console.log(list)
        const response=api.post('/checkout',list)
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
                    list.length===0?(<p className="text-4xl p-10 text-red-600">NO ITEMS</p>):
                    (list.map((item,index)=>(
                        <CartCard
                        image={item.image}
                        heading={item.heading}
                        />
                    )))
                }
                </div>
                <button className="flex bg-blue-800 text-white px-4 py-2 rounded-xl items-center font-extrabold border-2 border-blue-950 mx-auto" onClick={checkout}>
                    <h1>CHECKOUT</h1>
                    <img src="/checkout.svg" className="h-10"/>
                </button>
        </div>
    )
}