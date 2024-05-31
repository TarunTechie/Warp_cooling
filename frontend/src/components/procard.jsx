function Procard({image,heading,content})
{
    return(
        <div className="grid justify-items-center bg-white m-5 rounded-xl p-2 max-h-96 max-w-60 border-2 border-blue-500 pcard">
            <img src={image} className="rounded-t h-52"/>
            <h1 className="text-blue-500 text-center font-bold p-2 ">{heading}</h1>
            <p className="text-center text-black overflow-auto tohide">{content}</p>
        </div>
    )
}
export default Procard
