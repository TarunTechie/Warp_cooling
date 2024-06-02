function Procard({image,heading,content})
{
    function addToCart()
    {
        localStorage.setItem("number",parseInt(localStorage.getItem('number'))+1)
        localStorage.setItem(localStorage.getItem('number'),JSON.stringify({"image":image,"heading":heading}))
    }
    return(
        <div className="grid justify-items-center bg-white m-5 rounded-xl p-2 max-h-96 max-w-60 border-2 border-blue-500 pcard">
            <img src={image} className="rounded-t h-52"/>
            <div className="flex items-center">
            <h1 className="text-blue-500 text-center text-xl font-bold p-2 ">{heading}</h1>
            <img src="public\cart.svg" className="m-4 bg-white rounded-l border-2 border-black h-8 hover:-translate-y-1 hover:shadow-xl" onClick={addToCart}/>
            </div>
            <p className="text-center text-black overflow-auto tohide">{content}</p>
        </div>
    )
}
export default Procard
