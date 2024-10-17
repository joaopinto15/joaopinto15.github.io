import React, { useEffect, useState } from 'react';
import { fetchUserInfo } from '../services/userInfoService';
import { FaApple, FaWindows, FaMobileAlt } from 'react-icons/fa';
import { FcLinux } from 'react-icons/fc';
// Helper function to detect OS and return corresponding icon
const getOS = () => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = { name: 'Unknown OS', icon: null };

    if (macosPlatforms.includes(platform)) {
        os = { name: 'Mac OS ', icon: <FaApple className='ml-2' /> };
    } else if (iosPlatforms.includes(platform)) {
        os = { name: 'iOS ', icon: <FaApple className='ml-2' /> };
    } else if (windowsPlatforms.includes(platform)) {
        os = { name: 'Windows ', icon: <FaWindows className='text-[#00A3EE] ml-2' /> };
    } else if (/Android/.test(userAgent)) {
        os = { name: 'Android ', icon: <FaMobileAlt className='ml-2' /> };
    } else if (/Linux/.test(platform)) {
        os = { name: 'Linux ', icon: <FcLinux className='ml-2' /> };
    }

    return os;
};

const UserInfoCard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const data = await fetchUserInfo();
                setUserInfo(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user info:', error);
                setError(error.message || 'An error occurred');
                setLoading(false);
            }
        };

        getUserInfo();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center h-44 w-72 rounded-3xl border-4 border-neutral-500 dark:border-gray-300 overflow-hidden shadow-md">
                <aside className="bg-black text-white p-4 rounded-lg w-full h-full font-mono">
                    <div className="flex justify-center items-center h-full">
                        <p className="typing text-xs">Loading...</p>
                    </div>
                </aside>
            </div>
        );
    }

    if (error) {
        return <div className="flex justify-center text-black dark:text-white items-center h-44 w-72">Error: {error}</div>;
    }

    const os = getOS();

    return (
        <div className="flex flex-col items-center h-44 w-72 rounded-3xl border-4 border-neutral-500 dark:border-gray-300 overflow-hidden shadow-md">
            <aside className="bg-black text-white p-4 rounded-lg w-full h-full font-mono">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-xs">bash</p>
                </div>
                <div className="mt-4">
                    <p className="text-green-400 text-sm mb-2">$ ./user_info.sh</p>
                    {userInfo.ip && (
                        <p className="text-white text-xs">
                            <b>IP:</b> {userInfo.ip}
                        </p>
                    )}
                    {userInfo.city ? (
                        <>
                            <p className="text-white text-xs flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                                <b>Location:&nbsp;</b> {userInfo.region}, {userInfo.country}
                                <img
                                    src={userInfo.country_flag}
                                    alt={`${userInfo.country} flag`}
                                    className="w-3 h-3 rounded-sm ml-1"
                                />
                            </p>
                            <p className="text-white text-xs">
                                <b>ISP:</b> {userInfo.isp}
                            </p>
                            <p className="text-white text-xs flex items-center">
                                <b>OS:&nbsp;</b> {os.name} {os.icon}
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-xs">
                                <b>Info:</b> No data found
                            </p>
                            <p className="text-xs">
                                <b>Browser:</b> <span className="text-green-500">Secure</span>
                            </p>
                        </>
                    )}
                </div>
            </aside>
        </div>
    );
};

export default UserInfoCard;
