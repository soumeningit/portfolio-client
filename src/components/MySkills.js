import React from 'react'

import img1 from "../assets/HTML.png"
import img2 from "../assets/CSS.png"
import img3 from "../assets/Bootstrap.svg"
import img4 from "../assets/Tailwind.png"
import img5 from "../assets/MaterialUI.svg"
import img6 from "../assets/Javascript.svg"
import img7 from "../assets/React.png"
import img8 from "../assets/Redux.svg"
import img9 from "../assets/NodeJs.svg"
import img10 from "../assets/Express.png"
import img11 from "../assets/MongoDB.svg"
import img12 from "../assets/Docker.svg"
import img13 from "../assets/Git.svg"
import img14 from "../assets/Github.svg"
import img15 from "../assets/CPP.svg"
import img16 from "../assets/Java.svg"

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];
function MySkills() {
    return (
        <>
            <h1 className='text-3xl md:text-4xl font-bold text-center text-slate-700 mt-20 md:mt-40'>My Skills</h1>
            <div className='flex flex-col md:flex-row justify-center mx-auto items-center mt-10 bg-gray-200 md:h-screen px-4 md:px-0'>
                {/* Left Side: Text Section */}
                <div className='flex flex-col text-gray-700 max-w-full md:max-w-[38%] w-full space-y-4 mb-6 md:mb-0 md:mr-10 px-4 md:px-0'>
                    <p className='text-base md:text-lg'>
                        I am a proficient MERN (MongoDB, Express.js, React.js, Node.js)
                        stack developer with experience in creating dynamic and scalable
                        web applications. Along with web development, I am skilled in C, C++, Java, and Python,
                        allowing me to work across various domains, tackle complex problems, and build efficient
                        software solutions.
                    </p>
                </div>

                {/* Right Side: Image Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-full md:max-w-[45%] w-full px-4 md:px-0'>
                    {
                        images.map((img, idx) => (
                            <div
                                key={idx}
                                className='h-20 w-20 sm:w-24 px-1 sm:px-2 py-1 border-2 border-[#E24503] bg-[#2A2A2A] rounded-md flex justify-center items-center
                                hover:scale-110 sm:hover:scale-125 transition-transform duration-500 ease-out'>
                                <img src={img} alt={`img${idx}`} className='h-full w-full object-cover rounded-md px-2 py-2' loading='lazy' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MySkills