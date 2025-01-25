import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";

const NavBar = () => {
    const links = <>
        <li className="font-bold text-base"><NavLink to={"/"}>Home</NavLink></li>
        <li className="font-bold text-base"><NavLink to={"/statistics"}>Statistics</NavLink></li>
        <li className="font-bold text-base"><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
    </>
    return (
        <nav className="navbar bg-[#9538E2] rounded-t-2xl py-4 px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-2xl text-white font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="bg-white p-3 rounded-full">
                    <TiShoppingCart className="text-2xl text-black" />
                </div>
                <div className="bg-white p-3 rounded-full">
                    <CiHeart className="text-2xl text-black" />
                </div>

            </div>
        </nav>
    );
};

export default NavBar;