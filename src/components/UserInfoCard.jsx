import React, { useEffect, useState } from 'react';
import { fetchUserInfo } from '../services/userInfoService';

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
                console.error("Error fetching user info:", error);
                setError(error.message || "An error occurred");
                setLoading(false);
            }
        };

        getUserInfo();
    }, []);

    if (loading) {
        return <div className="flex justify-center text-black dark:text-white items-center h-44 w-72">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center text-black dark:text-white items-center h-44 w-72">Error: {error}</div>;
    }


    return (
        <div className="flex flex-col items-center h-44 w-72 rounded-3xl border border-4 bg-gray-300 overflow-hidden shadow-md">
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
                    <p className="text-green-400 text-sm">$ user info</p>
                    <p className="text-white text-xs"><b className='text-sm'>IP:</b> {userInfo.ip}</p>
                    {userInfo.loc ? (
                        <>
                            <p className="text-white text-xs"><b className='text-sm'>Location:</b> {userInfo.city}, {userInfo.country}</p>
                            <p className="text-white text-xs"><b className='text-sm'>ISP:</b> {userInfo.org}</p>
                            <p className="text-xs">
                                <b className='text-sm'>Browser:</b> <span className="text-red-500">Not Secure</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-xs"><b className='text-sm'>Info:</b> No data found</p>
                            <p className="text-xs"><b className='text-sm'>Browser:</b> <span className="text-green-500">Secure</span></p>
                        </>
                    )}
                </div>
            </aside>
        </div>
    );
};

export default UserInfoCard;