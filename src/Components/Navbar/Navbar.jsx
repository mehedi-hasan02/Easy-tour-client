import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {

    const { users, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState('light');

    const handelSingOut = () => {
        logOut(auth)
            .then()
            .catch()
    }


    useEffect(()=>{
        localStorage.setItem('theme',theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme);

    },[theme])

    const handelTheme = (e) =>{
        if(e.target.checked)
        {
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }

    const navLink = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn bg-white shadow-none border-none'}>Home</NavLink></li>
        <li><NavLink to='/allTouristsSpots' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn bg-white shadow-none border-none'}>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addTouristsSpots' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn bg-white shadow-none border-none'}>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/myList' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn bg-white shadow-none border-none'}>My List</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">EasyTour</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLink
                    }
                </ul>
            </div>           
                <div className="navbar-end ">
                <input onChange={handelTheme}  type="checkbox"  className="toggle theme-controller"/>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    users ? <img className="" alt="User Avatar" src={users.photoURL} title={users.displayName} />
                                        :
                                        <FaRegUserCircle className="w-[40px] h-[40px]"/>
                                }
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {
                                users ?
                                    <div>
                                        <Link onClick={handelSingOut} className="btn bg-green-500 text-white hover:bg-green-500 text-white w-full">Log Out</Link>

                                    </div>
                                    :
                                    <div className="flex flex-col">
                                        <Link className="btn bg-green-500 text-white hover:bg-green-500 text-white" to='/login'>Login</Link>
                                        <Link className="btn bg-green-500 text-white hover:bg-green-500 text-white" to='/register'>Register</Link>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            
        </div>
    );
};

export default Navbar;