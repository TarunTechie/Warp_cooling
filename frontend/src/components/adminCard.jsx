import CartCard from "../components/cartCard"
export default function AdminCard({name,email,orderno,date,status,item})
{
    return(
        <div className="grid mt-44 gap-5 rounded-xl border-4 border-blue-950 bg-white">
             <div className="grid mt-44 gap-5 p-8 mx-4 rounded-xl border-4 border-blue-950 bg-white">
                <h1 className="heading">ORDER DETAILS</h1>
                <span className="flex items-center gap-10">
                    <h1 className="font-serif font-bold text-blue-950 text-3xl">CUSTOMER NAME:</h1>
                    <h1 className="font-mono font-bold text-4xl">{name}</h1>
                </span>
                <span className="flex items-center gap-10">
                    <h1 className="font-serif font-bold text-blue-950 text-3xl">CUSTOMER EMAIL:</h1>
                    <h1 className="font-mono font-bold text-4xl">{email}</h1>
                </span>
                <span className="flex items-center gap-10">
                    <h1 className="font-serif font-bold text-blue-950 text-3xl">ORDER NUMBER:</h1>
                    <h1 className="font-mono font-bold text-4xl">{orderno}</h1>
                </span>
                <span className="flex items-center gap-10">
                    <h1 className="font-serif font-bold text-blue-950 text-3xl">ORDER DATE:</h1>
                    <h1 className="font-mono font-bold text-4xl">{date}</h1>
                </span>
                <span className="flex items-center gap-10">
                    <h1 className="font-serif font-bold text-blue-950 text-3xl">ORDER STATUS:</h1>
                    <h1 className="font-mono font-bold text-4xl">{status}</h1>
                </span>
            </div>

            <div className="mt-10 grid justify-center">
                <h1 className="heading">PRODUCTS ORDERED</h1>
                {
                    item.map((item,index)=>(
                        <CartCard
                        image={item.image}
                        heading={item.heading}
                        />))
                }
            </div>
        </div>
    )
}