import React, { useState, useEffect } from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import {
    TbSquareRoundedLetterW, TbSquareRoundedLetterA, TbSquareRoundedLetterD, TbSquareRoundedLetterS,
    TbSquareRoundedArrowDown, TbSquareRoundedArrowUp, TbSquareRoundedArrowLeft, TbSquareRoundedArrowRight
} from "react-icons/tb";

const Overlay = () => {
    const [isCard1Visible, setIsCard1Visible] = useState(true);
    const [slideIn, setSlideIn] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        setSlideIn(true);
    }, []);

    const closeWindow = () => {
        setIsCard1Visible(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            {/* Overlay Positioned at the Bottom-Right */}
            <div
                id='overlay'
                className="fixed w-full max-w-xs md:max-w-md lg:max-w-lg h-auto flex flex-col space-y-4 items-end justify-center bottom-4 right-4 transition-all duration-500"
            >
                {/* Wrapper for both Tooltip and Card */}
                <div className="relative flex flex-col items-end">
                    {/* Tooltip Icon Positioned on the Right Side */}
                    <div
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className={`bg-gray-800 dark:bg-white py-2 w-12 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4 
                            ${slideIn ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} 
                            transition-transform duration-500`}
                    >
                        <IoIosHelpCircleOutline className='text-white dark:text-gray-800' />
                    </div>

                    {/* Tooltip Content Positioned Above the Icon */}
                    {showTooltip && (
                        <div
                            className={`absolute bottom-full right-0 mb-2 bg-gray-800 dark:bg-white border border-gray-700 dark:border-gray-200 rounded-md shadow-lg z-10 transition-all duration-500 p-4`}
                        >
                            <ul className="space-y-2">
                                <li className="text-white dark:text-gray-800 font-semibold">Movement</li>
                                <li className="flex items-center space-x-2 text-white dark:text-gray-800">
                                    <TbSquareRoundedLetterW className="text-lg" />
                                    <TbSquareRoundedLetterA className="text-lg" />
                                    <TbSquareRoundedLetterS className="text-lg" />
                                    <TbSquareRoundedLetterD className="text-lg" />
                                    <span>/</span>
                                    <TbSquareRoundedArrowUp className="text-lg" />
                                    <TbSquareRoundedArrowDown className="text-lg" />
                                    <TbSquareRoundedArrowLeft className="text-lg" />
                                    <TbSquareRoundedArrowRight className="text-lg" />
                                </li>
                                <li className="text-white dark:text-gray-800 font-semibold">Dance</li>
                                <li className="flex pl-4 py-1 items-center space-x-2 text-white dark:text-gray-800">
                                    <span className="border-2 border-gray-400 dark:border-gray-600 rounded px-2 font-semibold">
                                        H
                                    </span>                                </li>
                                <li className="text-white dark:text-gray-800 font-semibold">Run</li>
                                <li className="flex pl-4 py-1 items-center space-x-2 text-white dark:text-gray-800">
                                    <span className="border-2 border-gray-400 dark:border-gray-600 rounded px-2 font-semibold">
                                        Shift
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )}
                    {/* First Card - Positioned below the tooltip */}
                    {isCard1Visible && (
                        <div
                            id='card1'
                            className={`relative flex w-full bg-gray-800 dark:bg-white shadow-lg rounded-lg overflow-hidden mt-4
            ${slideIn ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} 
            transition-transform duration-700 ease-in-out`}
                        >
                            <div className="w-2 sm:w-3 bg-gray-600 dark:bg-gray-800" />
                            <div className="flex items-center px-2 py-3">
                                <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full" src="https://github.com/joaopinto15.png" alt="Avatar" />
                                <div className="mx-2 sm:mx-3">
                                    <h2 className="text-sm sm:text-base md:text-xl font-semibold text-white dark:text-gray-800">Welcome to my web portfolio!</h2>
                                    <p className="text-xs sm:text-sm text-gray-300 dark:text-gray-600">Explore my work and don't miss the 3D animation section for an immersive experience. Enjoy!</p>
                                </div>
                                <button
                                    onClick={closeWindow}
                                    type="button"
                                    className="ml-2 sm:ml-4 bg-gray-700 dark:bg-white rounded-md p-1 sm:p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-600 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                >
                                    <span className="sr-only">Close card 1</span>
                                    <svg className="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default Overlay;
