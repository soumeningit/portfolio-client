import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/E-Learning.jpg";
import img2 from "../assets/ChatAppImg.jpg";
import img3 from "../assets/Ecommerce.png";
import img4 from "../assets/WeatherApp.jpg";
import img5 from "../assets/health.jpg";
import img6 from "../assets/MockInterview.jpg";
import img7 from "../assets/RentMate.png";
import img8 from "../assets/BlogImage.png";

const projects = [
    {
        id: 1,
        image: img1,
        title: "E-Learning App",
        description: "Web app that enables users to learn new skills and knowledge.",
        link: "https://github.com/soumeningit/NucleusET",
        liveLink: "https://nucleus-nine-zeta.vercel.app/"
    },
    {
        id: 6,
        image: img6,
        title: "Mock Interview",
        description: "Users can practice interviews with instant analysis. Offers paid and free versions.",
        link: "https://github.com/soumeningit/InstantMockInterview",
        liveLink: "https://instant-mock-interview.vercel.app/"
    },
    {
        id: 2,
        image: img7,
        title: "Rent Mate",
        description: "A marketplace platform to rent and sell items easily.",
        link: "https://github.com/soumeningit/RentMate",
        liveLink: "https://rent-mate-7vjj.vercel.app/"
    },
    {
        id: 8,
        image: img8,
        title: "Blog App",
        description: "Allows users to create, manage, and publish personal blogs.",
        link: "https://github.com/soumeningit/Blog",
        liveLink: "https://blogapp-tau-flame.vercel.app/"
    },
    {
        id: 3,
        image: img3,
        title: "Ecommerce App",
        description: "Complete ecommerce platform to buy and sell products online.",
        link: "https://github.com/soumeningit/NewEcommarce",
        liveLink: "https://main--soumen-shopping-app.netlify.app/"
    },
    {
        id: 5,
        image: img5,
        title: "Medical App",
        description: "A virtual platform for patients to consult doctors remotely.",
        link: "",
        liveLink: ""
    },
    {
        id: 4,
        image: img4,
        title: "Weather App",
        description: "Simple weather-checking tool using public APIs.",
        link: "https://github.com/soumeningit/Weather-App",
        liveLink: "https://check-weather-sp.netlify.app/"
    },
];

function Projects() {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-50'>
            <h1 className='text-4xl sm:text-5xl font-bold text-center text-cyan-900 mb-12'>My Works</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 flex flex-col overflow-hidden'
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-52 object-cover'
                        />
                        <div className='p-5 flex flex-col flex-1'>
                            <h2 className='text-xl font-semibold text-gray-800 mb-2'>{project.title}</h2>
                            <p className='text-gray-600 mb-4 flex-grow'>{project.description}</p>
                            <div className='space-y-2 mt-auto'>
                                <Link
                                    to={project.link || '#'}
                                    target='_blank'
                                    className='block text-blue-600 hover:underline'
                                >
                                    Know More
                                </Link>
                                <Link
                                    to={project.liveLink || '#'}
                                    target='_blank'
                                    className='block text-blue-600 hover:underline'
                                >
                                    Live Link
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects