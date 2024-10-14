// src/services/weatherService.js
import axios from 'axios';

const CACHE_KEY = 'weatherData';
const CACHE_TIMESTAMP_KEY = 'weatherDataTimestamp';

// Helper function to check if the stored data is from the same day and hour
const isDataFromSameDayAndHour = (timestamp) => {
    if (!timestamp) {
        return false; // Return false if no valid timestamp is found
    }

    const storedDate = new Date(parseInt(timestamp));
    const currentDate = new Date();

    // Check if it's the same day and the same hour
    const isSameDay = storedDate.toISOString().split('T')[0] === currentDate.toISOString().split('T')[0];
    const isSameHour = storedDate.getHours() === currentDate.getHours();

    return isSameDay && isSameHour;
};

export const fetchWeather = async () => {
    try {
        // Check if we have cached data and if it's from the same day and hour
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

        // Validate the timestamp and data
        if (cachedData && cachedTimestamp && isDataFromSameDayAndHour(cachedTimestamp)) {
            console.log('Using cached weather data:', JSON.parse(cachedData));
            return JSON.parse(cachedData);
        }

        // Fetch fresh weather data from the API
        const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
            params: {
                q: "Sofia,BG",
                units: 'metric',
                lang: 'en',
                appid: import.meta.env.OPEN_WEATHER_API_KEY,
            },
        });
        console.log('Weather data from API:', response.data);

        // Cache the data and the current timestamp (in milliseconds)
        localStorage.setItem(CACHE_KEY, JSON.stringify(response.data));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString()); // Store as string

        return response.data;
    } catch (error) {

        console.error('Error fetching weather data:', error);
        throw error;
    }
};
