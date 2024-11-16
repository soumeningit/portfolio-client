import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Soumen.png"
import { useState } from "react";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <nav className='flex flex-wrap items-center justify-between bg-slate-500 h-16 px-4 md:px-8'>
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="logo" className='h-10 w-auto rounded-full object-cover shadow-md' />
                </div>

                {/* Navigation Links */}
                <ul className='hidden md:flex text-[#FFFFFF] font-Monserrat text-base space-x-6 items-center cursor-pointer'>
                    <Link to='/'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4">About Me</li>
                    </Link>
                    <Link to='/skill'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4">My Skills</li>
                    </Link>
                    <Link to='/project'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4">My Projects</li>
                    </Link>
                    <Link to='/contact'>
                        <li className="hover:text-teal-200 hover:underline hover:underline-offset-4">Contact</li>
                    </Link>
                </ul>

                {/* Mobile Navigation Menu */}
                {/* <ul className='flex md:hidden flex-col text-[#FFFFFF] font-Monserrat text-sm space-y-2 pt-4'>
                    <Link to='/'>
                        <li className="hover:text-teal-200">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="hover:text-teal-200">About Me</li>
                    </Link>
                    <Link to='/skill'>
                        <li className="hover:text-teal-200">My Skills</li>
                    </Link>
                    <Link to='/project'>
                        <li className="hover:text-teal-200">My Projects</li>
                    </Link>
                    <Link to='/contact'>
                        <li className="hover:text-teal-200">Contact</li>
                    </Link>
                </ul> */}

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className='md:hidden text-white focus:outline-none'
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>


            </nav>
            {/* Mobile Navigation Links */}
            {isMobileMenuOpen && (
                <ul className='flex flex-col items-center bg-slate-600 text-[#FFFFFF] font-Monserrat text-base space-y-4 py-4 md:hidden'>
                    <Link to='/' onClick={toggleMobileMenu}><li className="hover:text-teal-200">Home</li></Link>
                    <Link to='/about' onClick={toggleMobileMenu}><li className="hover:text-teal-200">About Me</li></Link>
                    <Link to='/skill' onClick={toggleMobileMenu}><li className="hover:text-teal-200">My Skills</li></Link>
                    <Link to='/project' onClick={toggleMobileMenu}><li className="hover:text-teal-200">My Projects</li></Link>
                    <Link to='/contact' onClick={toggleMobileMenu}><li className="hover:text-teal-200">Contact</li></Link>
                </ul>
            )}
        </>

    )
}

export default Navbar