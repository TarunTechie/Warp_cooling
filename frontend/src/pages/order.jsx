import Top from "../components/top";
import Bottom from '../components/bottom';
import { useEffect, useState } from "react";
import api from "../components/api";
import CartCard from "../components/cartCard";
export default function Order() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); 

    function getData() {
        console.log("Fetching order data...");
        api.get('/getOrder', { params: { 'id': sessionStorage.getItem('userid') } })
            .then(response => {
                console.log(response.data);
                setData(response.data);
                setLoading(false); 
            })
            .catch(error => {
                console.log(error);
                setLoading(false); 
            });
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <div
          class="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl align-center items-center my-auto"
        >
          <div class="bg-[#333] flex items-center p-[5px] text-whitec relative">
            <div class="flex absolute left-3">
              <span class="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
              <span class="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
              <span class="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
            </div>
            <div class="flex-1 text-center text-white">status</div>
          </div>
          <div class="p-2.5 text-[#0f0]">
            <div>
              <span class="mr-2">Loading</span>
              <span class="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
              <span class="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
              <span class="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
            </div>
          </div>
        </div>
    }

    if (!data) {
        return <div>No data available</div>; 
    }

    return (
        <div>
            <Top />
            <div className="grid mt-44 gap-5 p-8 mx-4 rounded-xl border-4 border-blue-950 bg-white">
                <h1 className="heading">ORDER DETAILS</h1>
                <span className="flex items-center gap-10">
                    <h1 className="font-serif font-bold text-blue-950 text-3xl">CUSTOMER NAME:</h1>
                    <h1 className="font-mono font-bold text-4xl">{data.name}</h1>
                </span>
                <span className="flex items-center gap-10">
                    <h1 className="font-serif font-bold text-blue-950 text-3xl">ORDER NUMBER:</h1>
                    <h1 className="font-mono font-bold text-4xl">{data.orderno}</h1>
                </span>
                <span className="flex items-center gap-10">
                    <h1 className="font-serif font-bold text-blue-950 text-3xl">ORDER DATE:</h1>
                    <h1 className="font-mono font-bold text-4xl">{data.date}</h1>
                </span>
                <span className="flex items-center gap-10">
                    <h1 className="font-serif font-bold text-blue-950 text-3xl">ORDER STATUS:</h1>
                    <h1 className="font-mono font-bold text-4xl">{data.status}</h1>
                </span>
            </div>
            <div className="mt-10 grid justify-center">
                <h1 className="heading">PRODUCTS ORDERED</h1>
                {
                    data.item.map((item,index)=>(
                        <CartCard
                        image={item.image}
                        heading={item.heading}
                        />))
                }
                </div>
            <Bottom />
        </div>
    );
}
