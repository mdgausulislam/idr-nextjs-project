"use client";
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { SiGeneralelectric } from "react-icons/si";
import { FaBuromobelexperte } from "react-icons/fa6";
import { FaCheckCircle, FaCheckSquare, FaCopyright, FaDownload, FaHandHoldingHeart } from "react-icons/fa";
import { MdCreditScore, MdOutlinePrivacyTip } from "react-icons/md";

function Page() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleItemClick = () => {
        setIsOpen(false);
    }

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                </div>
                <a className="btn btn-ghost text-xl ml-28">Duas Page</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-green-500 focus:ring-blue-500"
                            type="search" name="search" placeholder="Search By Dua Name" />
                        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                            <IoSearchOutline className='w-6 h-6 mt-2' />
                        </button>
                    </div>
                </ul>
            </div>
            <div className="navbar-end">

                <div className="relative inline-block text-left mr-6">
                    <div className="group">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-black focus:outline-none "
                        >
                            <div className="avatar mr-2">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        alt="Avatar"
                                    />
                                </div>
                            </div>
                            <svg
                                className="w-4 h-4 ml-2 -mr-1 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                            </svg>
                        </button>

                        {isOpen && (
                            // <div className="absolute left-0 mt-2 w-52!important max-w-full origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-100 visible transition duration-300">
                            <div className="absolute mt-1 w-72 shadow-2xl opacity-100 visible transition duration-300 divide-gray-200 stroke-yellow-100 border-2 rounded-xl" style={{ left: '-180px' }}>
                                <div className="py-2">
                                    <a
                                        href="#"
                                        className="flex px-4 py-2 pt-6 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleItemClick}
                                    ><FaHandHoldingHeart className='w-6 h-6 text-green-500 mr-6' />
                                        Support Us
                                    </a>
                                    <a
                                        href="#"
                                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleItemClick}
                                    ><FaDownload className='w-6 h-6 text-green-500 mr-6' />
                                        DownLoad Dua App
                                    </a>
                                    <a
                                        href="#"
                                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleItemClick}
                                    ><FaCheckSquare className='w-6 h-6 text-green-500 mr-6' />
                                        Privacy Policy
                                    </a>
                                    <a
                                        href="#"
                                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleItemClick}
                                    ><FaCheckCircle className='w-6 h-6 text-green-500 mr-6' />
                                        Thanks & Credits
                                    </a>
                                    <a
                                        href="#"
                                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleItemClick}
                                    ><MdOutlinePrivacyTip className='w-6 h-6 text-green-500 mr-6' />
                                        About Us
                                    </a>
                                    <a
                                        href="#"
                                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleItemClick}
                                    ><FaCopyright className='w-6 h-6 text-green-500 mr-6' />
                                        Copywright Warning
                                    </a>
                                    <a
                                        href="#"
                                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleItemClick}
                                    ><MdCreditScore className='w-6 h-6 text-green-500 mr-6' />
                                        Our Other Projects
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn"><IoMdSettings className='text-green-600 w-6 h-6' /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                        <ul className="menu rounded-l-2xl p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <h1 className='text-center font-bold text-xl'>Settings</h1>
                            <div className='mt-10 space-y-3'>
                                <li><button><IoLanguageOutline className='h-6 w-6' />Language Setting</button></li>
                                <li><button> <SiGeneralelectric className='h-6 w-6' />General Setting</button></li>
                                <li><button> <FaBuromobelexperte className='h-6 w-6' />Font Setting</button></li>
                                <li><button><FaBuromobelexperte className='h-6 w-6' />Appearence Setting</button></li>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
