import Top from "../components/top";
import Bottom from "../components/bottom";
import { useEffect, useState } from "react";
import api from "../components/api";
import CartCard from "../components/cartCard";
export default function Order() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  function getData() {
    console.log("Fetching order data...");
    api
      .get("/getOrder", { params: { id: sessionStorage.getItem("userid") } })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div class="flex flex-row gap-2 h-screen w-screen justify-center items-center">
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    );
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
          <h1 className="font-serif font-bold text-blue-950 text-3xl">
            CUSTOMER NAME:
          </h1>
          <h1 className="font-mono font-bold text-4xl">{data.name}</h1>
        </span>
        <span className="flex items-center gap-10">
          <h1 className="font-serif font-bold text-blue-950 text-3xl">
            ORDER NUMBER:
          </h1>
          <h1 className="font-mono font-bold text-4xl">{data.orderno}</h1>
        </span>
        <span className="flex items-center gap-10">
          <h1 className="font-serif font-bold text-blue-950 text-3xl">
            ORDER DATE:
          </h1>
          <h1 className="font-mono font-bold text-4xl">{data.date}</h1>
        </span>
        <span className="flex items-center gap-10">
          <h1 className="font-serif font-bold text-blue-950 text-3xl">
            ORDER STATUS:
          </h1>
          <h1 className="font-mono font-bold text-4xl">{data.status}</h1>
        </span>
      </div>
      <div className="mt-10 grid justify-center">
        <h1 className="heading">PRODUCTS ORDERED</h1>
        {data.item.map((item, index) => (
          <CartCard image={item.image} heading={item.heading} />
        ))}
      </div>
      <Bottom />
    </div>
  );
}
