import React from 'react';
import PropTypes from 'prop-types';

const WelcomeCard = () => {
    const closeWindow = (id) => {
        const card = document.getElementById(id);
        card.style.display = 'none';
    };

    return (
        <div id='welcomeCard' className="absolute bottom-4 right-4 w-full max-w-xs md:max-w-md lg:max-w-lg h-auto flex flex-col space-y-4 items-center justify-center">

            {/* First Card */}
            <div id='card1' className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-2 sm:w-3 bg-gray-800" />
                <div className="flex items-center px-2 py-3">
                    <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full" src="https://github.com/joaopinto15.png" alt="Avatar" />
                    <div className="mx-2 sm:mx-3">
                        <h2 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">Welcome to my web portfolio!</h2>
                        <p className="text-xs sm:text-sm md:text-gray-600">Explore my work and don't miss the 3D animation section for an immersive experience. Enjoy!</p>
                    </div>
                    <button onClick={() => closeWindow('card1')} type="button" className="ml-2 sm:ml-4 bg-white rounded-md p-1 sm:p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close card 1</span>
                        <svg className="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>


    );
};

WelcomeCard.propTypes = {
    type: PropTypes.string.isRequired,
};

export default WelcomeCard;
