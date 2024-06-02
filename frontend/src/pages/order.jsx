import Top from "../components/top";
import Bottom from '../components/bottom';
import { useEffect, useState } from "react";
import api from "../components/api";
import CartCard from "../components/cartCard";
export default function Order() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state

    function getData() {
        console.log("Fetching order data...");
        api.get('/getOrder', { params: { 'id': sessionStorage.getItem('userid') } })
            .then(response => {
                console.log(response.data);
                setData(response.data);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.log(error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading message or spinner while fetching data
    }

    if (!data) {
        return <div>No data available</div>; // Show a message if no data is returned
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
