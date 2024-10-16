import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../services/weatherService';
import { weatherIcons } from '../constants';

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isNight, setIsNight] = useState(false);
    const [maxTemp, setMaxTemp] = useState(null);
    const [minTemp, setMinTemp] = useState(null);
    const [closestEntry, setClosestEntry] = useState(null);
    const [temp, setTemp] = useState(null);
    const [daysOfWeek, setDaysOfWeek] = useState([]);

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const data = await fetchWeather();
                setWeatherData(data);

                // Extract timezone offset from OpenWeather data (in seconds)
                const timezoneOffset = data.city.timezone; // timezone offset in seconds

                // Get the current time in the city's timezone
                const nowUTC = new Date(); // Current UTC time
                const localTime = new Date(nowUTC.getTime() + timezoneOffset * 1000); // Adjust for city's local time

                // Find the closest forecast entry by comparing timestamps
                const closestEntry = findClosestForecast(data.list, localTime);
                setClosestEntry(closestEntry);

                // Set weather data (icon, temperature, etc.)
                const icon = closestEntry.weather[0].icon;
                const temps = data.list.map(entry => entry.main.temp);
                const maxTemp = Math.round(Math.max(...temps) + 4); // Adjusted for UI
                const minTemp = Math.round(Math.min(...temps) - 4); // Adjusted for UI

                setMaxTemp(maxTemp);
                setMinTemp(minTemp);
                setTemp(Math.round(closestEntry.main.temp));
                setIsNight(icon.includes('n'));
                setWeatherIcon(weatherIcons[icon]);

                // Set days of the week
                setDaysOfWeek(getDaysOfWeek(localTime));

                setLoading(false);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setError(error.message || "An error occurred");
                setLoading(false);
            }
        };

        getWeatherData();
    }, []);

    // Helper function to find the closest forecast entry
    const findClosestForecast = (forecastList, localTime) => {
        let closest = null;
        let closestDiff = Infinity;

        forecastList.forEach((entry) => {
            const entryTime = new Date(entry.dt * 1000);
            const diff = entryTime - localTime; // difference between entry and local time

            // If the entry is in the future or exactly at the current time
            if (diff >= 0 && diff < closestDiff) {
                closest = entry;
                closestDiff = diff;
            }
        });

        // If no future forecast was found, fallback to the last past forecast
        if (!closest) {
            forecastList.forEach((entry) => {
                const entryTime = new Date(entry.dt * 1000);
                const diff = localTime - entryTime; // how long ago it was in the past

                if (diff >= 0 && diff < closestDiff) {
                    closest = entry;
                    closestDiff = diff;
                }
            });
        }

        return closest;
    };


    // Helper function to get the day names for today and the next three days
    const getDaysOfWeek = (currentDate) => {
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const today = currentDate.getDay(); // 0 for Sunday, 1 for Monday, etc.
        const nextDays = [];

        for (let i = 0; i < 4; i++) {
            nextDays.push(days[(today + i) % 7]);
        }

        return nextDays;
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center h-44 w-72 rounded-3xl border-4 border-neutral-500 dark:border-gray-300 overflow-hidden shadow-md">
                <aside className="bg-indigo-900 text-white p-4 rounded-lg w-full h-full font-mono">
                    <div className="flex justify-center items-center h-full">
                        <p className="text-xs">
                            Loading
                            <span className="animate-pulse">.</span>
                            <span className="animate-pulse delay-200">.</span>
                            <span className="animate-pulse delay-400">.</span>
                        </p>
                    </div>
                </aside>
            </div>
        );
    }

    if (error) return;


    return (
        <div className={`flex flex-col items-center h-44 w-72 rounded-3xl  border-neutral-500 dark:border-gray-300 border-4 ${isNight ? 'bg-gray-800' : 'bg-gray-300'} overflow-hidden shadow-md transition ease-in-out duration-100 group`}>
            <section className="relative flex items-center justify-between w-full h-3/ text-white overflow-hidden">
                <div className={`absolute h-full w-full ${isNight ? 'bg-indigo-900' : 'bg-[#ec7263]'} overflow-hidden`}>
                    <div className={`absolute top-[-80%] right-[-50%] w-72 h-72 opacity-40 ${isNight ? 'bg-blue-700' : 'bg-[#efc745]'} rounded-full transition-transform duration-500 group-hover:scale-125`}></div>
                    <div className={`absolute top-[-70%] right-[-30%] w-52 h-52 opacity-40 ${isNight ? 'bg-blue-700' : 'bg-[#efc745]'} rounded-full transition-transform duration-500 group-hover:scale-125`}></div>
                    <div className={`absolute top-[-35%] right-[-8%] w-24 h-24 opacity-100 ${isNight ? 'bg-blue-400' : 'bg-[#efc745]'} rounded-full transition-transform duration-500 group-hover:scale-125`}></div>
                </div>
                {/* Weather data */}
                <div className="flex flex-col justify-center h-full z-10 pl-4 pr-4">
                    <div className="flex items-center">
                        <div className="w-16 h-16">
                            {weatherIcon && React.cloneElement(weatherIcon, { className: "w-full h-full" })}
                        </div>
                        <div className="text-sm">{closestEntry.weather[0].description}</div>
                    </div>
                    <div className="text-5xl font-medium">{temp}°</div>
                    <div className="text-lg">{maxTemp}°/{minTemp}°</div>
                </div>
                {/* Date and location */}
                <div className="flex flex-col items-end justify-start h-full z-10 pr-4 mt-7">
                    <div className="flex flex-col items-end">
                        <div className="text-xl">
                            {new Date(closestEntry.dt * 1000).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true
                            })}
                        </div>
                        <div className="text-sm">
                            {new Date(closestEntry.dt * 1000).toLocaleDateString()}
                        </div>
                    </div>
                    <div className="text-lg">{weatherData.city.name}</div>
                </div>

            </section>
            {/* Days of the week */}
            <section className={`flex items-center justify-between w-full h-1/6 ${isNight ? 'bg-indigo-700' : 'bg-[#974859]'} shadow-inner`}>
                {daysOfWeek.map((day, idx) => (
                    <button
                        key={idx}
                        className={`flex items-center justify-center h-full w-full ${isNight ? 'bg-indigo-800' : 'bg-[#a75265]'} shadow-inner transition ease-in-out duration-100 hover:scale-90 hover:rounded-md border ${isNight ? 'border-indigo-900 hover:border-indigo-600' : 'border-[#8a3e4e] hover:border-[#7a3544]'} hover:shadow-lg`}
                    >
                        <span className="text-sm font-medium text-white opacity-70">{day}</span>
                        <span className="w-5 h-full ml-1"> {/* Adjusted margin-left */}
                            <svg
                                stroke="#ffffff"
                                fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    d="M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248-45.248a32 32 0 0 1-45.248 0z"
                                    fill="#ffffff"
                                ></path>
                            </svg>
                        </span>
                    </button>
                ))}
            </section>

        </div>
    );
};

export default WeatherCard;
