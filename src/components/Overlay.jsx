import React from 'react';
import PropTypes from 'prop-types';

const Overlay = () => {
    const closeWindow = () => {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    };
    return (
        <div id='overlay' className={`absolute bottom-4 right-4 w-full max-w-xs md:max-w-md lg:max-w-lg h-auto flex items-center justify-center`}>
            <div class="flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="w-2 sm:w-3 bg-gray-800" />
                <div class="flex items-center px-2 py-3">
                    <img class="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full" src="https://github.com/joaopinto15.png" />
                    <div class="mx-2 sm:mx-3">
                        <h2 class="text-sm sm:text-base md:text-xl font-semibold text-gray-800">Welcome to my web portfolio!</h2>
                        <p class="text-xs sm:text-sm md:text-gray-600">Explore my work and don't miss the 3D animation section for an immersive experience. Enjoy!</p>
                    </div>
                    <button onClick={closeWindow} type="button" className="ml-2 sm:ml-4 bg-white rounded-md p-1 sm:p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <svg className="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
};

Overlay.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Overlay;
