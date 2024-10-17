import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from "react-icons/fa6";


const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex transition-transform duration-300 hover:scale-105">
            <div className="flex-1 pr-4">
                {/* Project Name */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                </h5>

                {/* Project Description */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {project.description}
                </p>

                {/* Links (GitHub & Website) */}
                <div className="flex gap-4">
                    {/* Github Link */}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Website
                            <FaLink className="ml-2" />
                        </a>
                    )}
                </div>
            </div>

            {/* Project Icon */}
            <div className="w-1/5 flex justify-center items-center">
                <div className="block-container w-24 h-24 flex justify-center items-center">
                    {/* Outer div applying project-specific shadow and theme */}
                    <div className={`${project.shadow} rounded-xl ${project.theme} w-full h-full flex justify-center items-center transition-transform duration-300 hover:scale-110`}>
                        {/* Inner div containing the project icon */}
                        <div className="btn-front rounded-xl flex justify-center items-center w-full h-full">
                            <img
                                src={project.iconUrl}
                                alt={project.name}
                                className="w-3/4 h-3/4 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;