import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Top() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const[user,setUser]=useState()
    const[name,setName]=useState()
    const handleMenuOpen = () => {
        setMenuOpen(true);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    const handleLogout = () => {
        sessionStorage.clear()
        localStorage.clear()
        window.location.reload()
    };

    useEffect(()=>{
        setUser(sessionStorage.getItem('userid'))
        setName(sessionStorage.getItem('name'))
    },[])

    return (
        <header className="flex bg-blue-200 px-2 justify-between h-24 items-center fixed z-10 w-full top-0">
            <Link to="/">
                <img src="/logo.svg" alt="" srcSet="" className="w-56 p-4" />
            </Link>
            <div className="flex gap-44 text-2xl font-extrabold text-maron">
                <ul className="flex gap-44">
                    <Link to="/"><li className=" text-blue-950 hover:underline underline-offset-4" >Home</li></Link>
                    <Link to="/products"><li className=" text-blue-950 hover:underline underline-offset-4" >Products</li></Link>
                    <Link to="/order"><li className=" text-blue-950 hover:underline underline-offset-4 " >Orders</li></Link>
                </ul>
            </div>
            {user ? (
                <div className="relative grid" onMouseOver={handleMenuOpen} onMouseLeave={handleMenuClose}>
                    <div className="flex items-center border-4 rounded-full px-2 border-maron">
                        <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="40" fill="#000080">
                                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                            </svg>
                            <h2 className="text-maron font-bold text-xl">{name}</h2>
                            <svg className={`-mr-1 h-5 w-5 text-gray-400 ${menuOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="maron" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    {menuOpen && (
                        <div
                            className="rounded-xl absolute right-0 z-10 mt-12 w-56 origin-top-right border-[.1px]  border-blue-500 bg-white/75 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                            onMouseEnter={handleMenuOpen}
                            onMouseLeave={handleMenuClose}
                        >
                            <div role="none">
                                <Link to="/profile">
                                <h1 className="rounded-t-xl font-bold text-maron block px-4 py-2 hover:bg-blue-500 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-0">
                                    Profile
                                </h1>
                                </Link>
                                <Link to="/cart">
                                <h1 className="font-bold text-maron block px-4 py-2 hover:bg-blue-500 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-0">
                                    Cart
                                </h1></Link>
                                <h1 className="rounded-b-xl font-bold text-maron block px-4 py-2 hover:bg-blue-500 hover:text-white" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={handleLogout}>
                                        Logout
                                   </h1>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Link to="/login">
                    <button className="mr-10 w-fit p-2 text-xl font-extrabold bg-white text-blue-500 border-2 border-blue-500 rounded-xl hover:bg-blue-500 hover:text-white">LOGIN</button>
                </Link>
            )}
        </header>
    );
}
