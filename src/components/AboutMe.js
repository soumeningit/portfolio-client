import React from 'react';
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function AboutMe() {
    return (
        <>
            <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mt-24 mb-12'>About Me</h1>
            <div className='py-12 px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-10'>

                {/* Left Side: Social Links */}
                <div className='w-full max-w-lg px-4'>
                    <div className='flex flex-col gap-4'>
                        <a
                            href="https://github.com/soumeningit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center text-gray-700 hover:text-black transition'
                        >
                            <FaGithub className='text-xl mr-3' />
                            Follow on GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/soumen-pal-141866309/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center text-gray-700 hover:text-black transition'
                        >
                            <IoLogoLinkedin className='text-xl mr-3' />
                            Follow on LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/spal0_1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center text-gray-700 hover:text-black transition'
                        >
                            <FaInstagram className='text-xl mr-3' />
                            Follow on Instagram
                        </a>
                        <a
                            href="https://x.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center text-gray-700 hover:text-black transition'
                        >
                            <FaTwitter className='text-xl mr-3' />
                            Follow on Twitter
                        </a>
                    </div>
                </div>

                {/* Right Side: Description */}
                <div className='w-full max-w-xl bg-white p-6 md:p-8 rounded-xl shadow'>
                    <p className='text-base md:text-lg text-gray-800 leading-relaxed'>
                        I am a passionate MERN stack developer with a keen interest in building efficient and scalable web applications.
                        With expertise in MongoDB, Express.js, React.js, and Node.js, I enjoy developing end-to-end solutions that offer
                        seamless user experiences. Additionally, I am skilled in C, C++, Java, and Python, enabling me to solve complex
                        problems across various domains. I constantly seek to learn new technologies and contribute to impactful projects
                        that address real-world challenges.
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
