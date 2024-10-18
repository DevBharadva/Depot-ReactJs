import React from 'react';
import { FiUser } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";
import img from '../assets/Images/asset 8.png'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import MenuPage from './MenuPage';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io"; 

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    const Cartdata = useSelector((state) => state.cart)
    const amount = Cartdata.length && Cartdata.map((item) => item.price * item.quantity).reduce((prev, next) => prev += next)
    const data1 = useSelector((state) => state.wishlist)


    const total = amount
    const result1 = data1.length



    return (
        <>
            <nav className="bg-white  sticky top-0 z-50 ">
                <div className="container mx-auto px-6 py-8 flex justify-evenly  items-center ">
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <Link to="/" className="text-gray-500 hover:text-black menu-h ">HOME</Link>
                        </li>
                        <li>

                            <Link to="/Shop" className="text-gray-500 hover:text-black">SHOP
                            </Link>
                        </li>
                        <li>

                            <Link to="/Pages" className="text-gray-500 hover:text-black"></Link>
                            <div class="dropdown">
                                <button class="dropbtn text-gray-500 hover:text-black">PAGES
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <Link to="/AboutUs">About Us</Link>
                                    <Link to="/Faq">FAQ</Link>
                                    <Link to="/ContactUs">Contact US</Link>
                                </div>
                            </div>
                        </li>
                        <li>

                            <Link to="/Wishlist" className="text-gray-500 hover:text-black">WhichList({result1})</Link>
                        </li>
                    </ul>
                    <div>
                        <Link to="/">
                            <img className='w-36 ' src={img} alt="" />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4 " >
                        <Link to="/Cart" className="text-gray-500 hover:text-black">CART (${total})</Link>
                        <Link to="/Register" className="text-gray-500 hover:text-black flex ">
                            <span className='mt-1 mr-1'><FiUser /></span>
                            LOGIN</Link>
                        <button onClick={toggleMenu} className="text-gray-500 hover:text-black md:hidden focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                        <a href="">
                            <VscSearch />
                        </a>
                        
                        <IoIosMenu className='size-6'/>
                    </div>
                </div>

             {isOpen && (
              <div className="md:hidden bg-gray-100 text-black text-center">
                 <Link to="/" className="block  px-2 py-2">Home</Link>
                 <Link   to="/shop" className="block  px-2 py-2">Shop</Link>
                <Link   to="/AboutUs" className="block   px-2 py-2">About Us</Link>
                 <Link  to="/ContactUs" className="block  px-2 py-2">Contact Us</Link>
               </div>
            )}
            </nav>
            <Outlet />
        </>
    );
};
export default Navbar

// src/Navbar.js

