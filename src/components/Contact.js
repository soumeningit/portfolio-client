import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgMail, CgSoftwareDownload } from "react-icons/cg";
import { FaLinkedin, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { sendMessageAPI } from './sendMessageAPI';
import logo from "../assets/Soumen.png";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandle = async (event) => {
        event.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);
        try {
            const response = await sendMessageAPI(formData);
            if (response?.success === true) {
                alert("Thanks for your interest");
                setFormData({ name: "", email: "", message: "" }); // Clear form
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        }
        setLoading(false);
    };

    const changeHandler = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const showCV = (event) => {
        event.preventDefault();
        navigate("/view");
    };

    return (
        <div className='bg-[#2A2A2A] mt-[10rem] px-4'>
            <h1 className='text-3xl font-bold text-center text-gray-300 mb-6'>Contact</h1>
            <p className='text-center text-base text-gray-400 mb-8'>Thanks for scrolling! Feel free to leave a message below.</p>

            <div className='mx-auto p-6 bg-[#b7b5b5] rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start justify-center max-w-4xl'>

                {/* Left Section: Contact Details */}
                <div className='w-full md:max-w-[45%] text-base font-semibold mb-8 md:mb-0 md:mr-8'>
                    <img src={logo} alt="logo" className='h-28 w-28 mb-6 md:mb-8 rounded-md mx-auto md:mx-0' loading='lazy' />
                    <h1 className='text-xl font-semibold mb-4 md:mb-6 text-center md:text-left'>Let's Get In Touch</h1>
                    <a href="mailto:soumenpalcse@gmail.com" className='flex items-center justify-center md:justify-start space-x-4 mb-4 text-gray-700'>
                        <CgMail className='text-xl' /> <span>soumenpalcse@gmail.com</span>
                    </a>
                    <div className='flex justify-center md:justify-start text-2xl space-x-4'>
                        <a href="https://www.linkedin.com/in/soumen-pal-141866309/" target='_blank' rel="noreferrer" className='hover:text-[#0e76a8]'><FaLinkedin /></a>
                        <a href="https://www.instagram.com/spal0_1" target='_blank' rel="noreferrer" className='hover:text-[#E1306C]'><FaInstagram /></a>
                        <a href="https://x.com/" target='_blank' rel="noreferrer" className='hover:text-[#1DA1F2]'><FaTwitterSquare /></a>
                    </div>
                    <button
                        onClick={showCV}
                        className='mt-8 w-full md:w-auto px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-300 flex items-center justify-center md:justify-start space-x-2'>
                        <span>MY CV</span> <CgSoftwareDownload className='text-xl' />
                    </button>
                </div>

                {/* Right Section: Contact Form */}
                <form onSubmit={submitHandle} className='w-full md:max-w-[45%] space-y-6'>

                    {/* Name Field */}
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium mb-2'>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder='Your full name'
                            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                        />
                    </div>

                    {/* Email Field */}
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium mb-2'>Email:</label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder='Your email address'
                            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                        />
                    </div>

                    {/* Message Field */}
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-medium mb-2'>Message:</label>
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={changeHandler}
                            placeholder='Your message here'
                            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32'
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        disabled={loading}
                        className={`w-full px-4 py-2 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 
                            ${loading ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-400'}`}>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
