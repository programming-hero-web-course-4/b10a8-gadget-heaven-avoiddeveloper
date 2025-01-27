import { NavLink, useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { ItemContext, WishContext } from "../../App";

const NavBar = () => {
    const { cart } = useContext(ItemContext);
    const { wish } = useContext(WishContext);

    const loc = useLocation();

    const links = <>
        <li className="font-bold text-base"><NavLink to={"/home"}>Home</NavLink></li>
        <li className="font-bold text-base"><NavLink to={"/statistics"}>Statistics</NavLink></li>
        <li className="font-bold text-base"><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
        <li className="font-bold text-base"><NavLink to={"/whyUs"}>Why Us</NavLink></li>
    </>
    return (
        <nav className={`navbar rounded-t-2xl py-4 px-3 ${loc.pathname === '/' ? 'bg-[#9538E2] text-white' : 'bg-white text-black'}`}>
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
                <a className="text-2xl  font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="bg-white p-3 rounded-full flex gap-1">
                    <TiShoppingCart className="text-2xl text-black" />
                    <p className="text-[12px] text-black">{cart.length}</p>
                </div>
                <div className="bg-white p-3 rounded-full  flex gap-1">
                    <CiHeart className="text-2xl text-black" />
                    <p className="text-[12px] text-black">{wish.length}</p>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;