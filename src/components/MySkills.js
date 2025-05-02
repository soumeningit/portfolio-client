import React from 'react';

import img1 from "../assets/HTML.png";
import img2 from "../assets/CSS.png";
import img3 from "../assets/Bootstrap.svg";
import img4 from "../assets/Tailwind.png";
import img5 from "../assets/MaterialUI.svg";
import img6 from "../assets/Javascript.svg";
import img7 from "../assets/React.png";
import img8 from "../assets/Redux.svg";
import img9 from "../assets/NodeJs.svg";
import img10 from "../assets/Express.png";
import img11 from "../assets/MongoDB.svg";
import img12 from "../assets/Docker.svg";
import img13 from "../assets/Git.svg";
import img14 from "../assets/Github.svg";
import img15 from "../assets/CPP.svg";
import img16 from "../assets/Java.svg";

const images = [
    { src: img1, alt: "HTML" },
    { src: img2, alt: "CSS" },
    { src: img3, alt: "Bootstrap" },
    { src: img4, alt: "Tailwind CSS" },
    { src: img5, alt: "Material UI" },
    { src: img6, alt: "JavaScript" },
    { src: img7, alt: "React" },
    { src: img8, alt: "Redux" },
    { src: img9, alt: "Node.js" },
    { src: img10, alt: "Express.js" },
    { src: img11, alt: "MongoDB" },
    { src: img12, alt: "Docker" },
    { src: img13, alt: "Git" },
    { src: img14, alt: "GitHub" },
    { src: img15, alt: "C++" },
    { src: img16, alt: "Java" },
];

function MySkills() {
    return (
        <>
            <h1 className='text-3xl md:text-4xl font-bold text-center text-slate-700 mt-20 md:mt-40'>My Skills</h1>
            <div className='flex flex-col md:flex-row justify-center mx-auto items-center mt-10 bg-gray-200 md:h-screen px-4 md:px-0'>

                {/* Left Side: Text Section */}
                <div className='flex flex-col text-gray-700 max-w-full md:max-w-[38%] w-full space-y-4 mb-6 md:mb-0 md:mr-10 px-4'>
                    <p className='text-base md:text-lg'>
                        I am a proficient MERN (MongoDB, Express.js, React.js, Node.js) stack developer with experience in building dynamic and scalable
                        web applications. Additionally, I am skilled in C, C++, Java, and Python—enabling me to tackle diverse challenges and engineer efficient software solutions.
                    </p>
                </div>

                {/* Right Side: Image Grid */}
                <div className='grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-full md:max-w-[45%] w-full px-4'>
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className='h-20 w-20 sm:w-24 p-2 border-2 border-[#E24503] bg-[#2A2A2A] rounded-md flex justify-center items-center
              hover:scale-110 sm:hover:scale-125 transition-transform duration-300 ease-out'>
                            <img src={img.src} alt={img.alt} className='max-h-full max-w-full object-contain' loading='lazy' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MySkills;
