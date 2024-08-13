import { useEffect, useState } from "react";
import Top from "../components/top";
import Bottom from "../components/bottom";
import api from "../components/api";
export default function Profile() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  async function profileData() {
    try {
      const result = await api.get("/profile", {
        params: { id: sessionStorage.getItem("userid") },
      });
      setData(result.data[0]);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    profileData();
  }, []);
  return loading ? (
    <div class="flex flex-row gap-2 h-screen w-screen justify-center items-center">
      <div class="w-10 h-10 rounded-full bg-blue-700 animate-bounce"></div>
      <div class="w-10 h-10 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
      <div class="w-10 h-10 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  ) : (
    <div className="grid justify-center items-center">
      <Top />
      <div className="grid justify-center my-32">
        <div className="bg-blue-400 p-10 rounded-xl w-96">
          <img
            src="./profile.png"
            className="p-2 rounded-xl bg-white w-20 mx-auto "
          />
          <label className="text-xl font-bold font-serif mt-10">NAME</label>
          <h1 className="border-2 border-blue-600 p-4 font-bold bg-white rounded-lg">
            {data.name}
          </h1>

          <label className="text-xl font-bold font-serif mt-10">EMAIL</label>
          <h1 className="border-2 border-blue-600 p-4 font-bold bg-white rounded-lg">
            {data.email}
          </h1>

          <label className="text-xl font-bold font-serif mt-10">
            ACTIVE ORDER
          </label>
          <h1 className="border-2 border-blue-600 p-4 font-bold bg-white rounded-lg">
            {data.orderno}
          </h1>

        </div>
      </div>
      <Bottom />
    </div>
  );
}
