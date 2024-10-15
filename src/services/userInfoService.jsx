// src/services/userInfoService.js
import axios from 'axios';

const CACHE_KEY_IP = 'ipData';
const CACHE_KEY_USER_INFO = 'userInfoData';
const CACHE_TIMESTAMP_KEY = 'userInfoDataTimestamp';

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

export const fetchUserInfo = async () => {
    try {
        // Check if we have cached data and if it's from the same day and hour
        const cachedIpData = localStorage.getItem(CACHE_KEY_IP);
        const cachedUserInfoData = localStorage.getItem(CACHE_KEY_USER_INFO);
        const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

        // Validate the timestamp and data
        if (cachedIpData && cachedUserInfoData && cachedTimestamp && isDataFromSameDayAndHour(cachedTimestamp)) {
            console.log('Using cached user info data:', JSON.parse(cachedUserInfoData));
            return JSON.parse(cachedUserInfoData);
        }

        // Fetch fresh IP data from the API
        const ipResponse = await axios.get('https://api.ipify.org/?format=json');
        const ip = ipResponse.data.ip;

        try {
            // Fetch user info using the IP address
            const userInfoResponse = await axios.get(`https://ip-api.com/json/${ip}`);

            // Cache the data and the current timestamp (in milliseconds)
            localStorage.setItem(CACHE_KEY_IP, JSON.stringify(ipResponse.data));
            localStorage.setItem(CACHE_KEY_USER_INFO, JSON.stringify(userInfoResponse.data));
            localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString()); // Store as string

            return userInfoResponse.data;
        } catch (error) {
            return { ip };
        }
    } catch (error) {
        return;
    }
};