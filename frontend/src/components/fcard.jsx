export default function Fcard({image,heading,content})
{
    return(
        <div className="grid justify-items-center bg-blue-500 m-5 rounded-xl p-2 max-h-80 max-w-60 border-4 border-white hover:shadow-xl">
            <img src={image} className="p-2 max-h-40 bg-white rounded-xl"/>
            <h1 className="text-white text-center font-sans  font-bold">{heading}</h1>
            <div className="md:text-center text-color-white overflow-auto font-sans tohide"><p>{content}</p></div>
        </div>
    )
}