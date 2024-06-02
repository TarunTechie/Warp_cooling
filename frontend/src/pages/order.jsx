import Top from "../components/top"
import Bottom from '../components/bottom'
import { useEffect, useState } from "react"
import api from "../components/api"
export default function Order()
{
    const[data,setData]=useState()
    async function getdata()
    {
        console.log("hello")
        const response=await api.get('/getOrder',{params:{'id':sessionStorage.getItem('userid')}})
        console.log(response.data)
        setData(response.data)
    }
    useEffect(()=>{getdata()},[])
    return(<div>
        <Top/>
        <div className="grid mt-44 gap-5">
        <h1 className="heading">ORDER DETAILS</h1>
        <span className="flex items-center gap-10">
                <h1 className="font-serif font-bold text-blue-950 text-3xl">CUSTOMER NAME:</h1>
                <h1 className=" font-mono font-bold text-4xl">{data.name}</h1>
        </span>
        <span className="flex items-center gap-10">
                <h1 className="font-serif font-bold text-blue-950 text-3xl">ORDER NUMBER:</h1>
                <h1 className=" font-mono font-bold text-4xl">{data.orderno}</h1>
        </span>
        <span className="flex items-center gap-10">
                <h1 className="font-serif font-bold text-blue-950 text-3xl">ORDER DATE:</h1>
                <h1 className=" font-mono font-bold text-4xl">{data.date}</h1>
        </span>
        <span className="flex items-center gap-10">
                <h1 className="font-serif font-bold text-blue-950 text-3xl">ORDER STATUS:</h1>
                <h1 className=" font-mono font-bold text-4xl">{data.status}</h1>
        </span>
        </div>
        <Bottom/>
    </div>)
}