import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
    return (
        <div className="w-full max-w-sm sm:max-w-md md:max-w-4xl mx-auto p-4 md:p-6 bg-offWhite border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col md:flex-row transition-transform duration-300 hover:scale-105">

            {/* Project Icon (Placed above on small screens) */}
            <div className="w-full md:w-1/5 flex justify-center items-center mb-4 md:mb-0">
                <div className="block-container w-20 h-20 md:w-24 md:h-24 flex justify-center items-center">
                    {/* Outer div applying project-specific shadow and theme */}
                    <div className={`${project.shadow} rounded-xl ${project.theme} w-full h-full flex justify-center items-center transition-transform duration-300 hover:scale-110`}>
                        {/* Inner div containing the project icon */}
                        <div className="rounded-xl flex justify-center items-center w-full h-full">
                            <img
                                src={project.iconUrl}
                                alt={project.name}
                                className="w-3/4 h-3/4 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div className="flex-1 text-center md:text-left">
                {/* Project Name (Centered on small screens) */}
                <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                </h5>

                {/* Project Description (Visible only on md+ screens) */}
                <p className="mt-2 mb-3 font-normal text-gray-700 dark:text-gray-400 hidden md:block">
                    {project.description}
                </p>

                {/* Links (GitHub & Website) */}
                <div className="flex gap-4 mt-2 justify-center md:justify-start">
                    {/* GitHub Link */}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Github
                            <FaGithub className="ml-2" />
                        </a>
                    )}

                    {/* Website Link */}
                    {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Website
                            <FaLink className="ml-2" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
