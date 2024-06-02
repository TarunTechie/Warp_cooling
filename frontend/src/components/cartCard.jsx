export default function CartCard({image,heading,price})
{
    return(
        <div className="flex justify-items-center bg-white m-5 rounded-xl p-2 max-h-96 border-2 border-blue-500 pcard">
            <img src={image} className="rounded-t h-52"/>
            <div className="grid justify-items-center text-center w-full">
            <h1 className="text-blue-500 text-4xl font-bold p-2 ">{heading}</h1>
            <h1 className="text-blue-900 text-xl font-bold p-2 ">Rs.1000</h1>
            </div>
        </div>
    )
}

