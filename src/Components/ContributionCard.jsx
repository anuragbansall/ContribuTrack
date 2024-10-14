import React, { useEffect, useRef, useState } from 'react';
import { FaTrophy } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";
import domtoimage from 'dom-to-image';
import Button from './Button';
import { useParams } from 'react-router-dom';
import AxiosInstance from '../utils/Axios';

function ContributionCard() {
    const cardRef = useRef(null);
    const {username} = useParams()

    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await AxiosInstance.get('/OSLeaderboard');
            setUserData(response.data.leaderboard);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const filterDataByName = (name) => {
        const userIndex = userData.findIndex(user => user?.login?.trim().toLowerCase() === name.trim().toLowerCase());
        
        if (userIndex !== -1) {
            const filtered = userData[userIndex];
            const rank = userIndex + 1;
            setFilteredData({ ...filtered, rank });
        } else {
            setFilteredData(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (username) {
            filterDataByName(username);
        } else {
            setFilteredData(null);
        }
    }, [userData, username]);

    // const handleDownload = () => {
    //     if (cardRef.current) {
    //         domtoimage.toPng(cardRef.current)
    //             .then((dataUrl) => {
    //                 const link = document.createElement('a');
    //                 link.href = dataUrl;
    //                 link.download = `${username}_gssoc_card.png`;
    //                 link.click();
    //             })
    //             .catch((error) => {
    //                 console.error('oops, something went wrong!', error);
    //             });
    //     }
    // };

    if(!userData.length){
        return <h2>Loading...</h2>;
    }

    if (!filteredData) {
        return <h2>No User Found</h2>;
    }

    return (
        <div className='max-w-full'>
            <div ref={cardRef} className='w-[20rem] overflow-x-hidden max-w-full h-[25rem] bg-[#fff] text-slate-800 flex flex-col gap-2 items-center p-4 rounded-md relative hover:-translate-y-1 duration-200 shadow-lg border-b-[8px] border-[#FB923C]'>
                <div className='flex-shrink-0 w-[8rem] max-w-full p-1 bg-[#FB923C] rounded-full overflow-hidden'>
                    <img 
                        src={filteredData.avatar_url} 
                        alt={filteredData.login} 
                        className='h-full w-full object-cover rounded-full' 
                        crossOrigin="anonymous" 
                    />
                </div>
                <a href={`https://github.com/${filteredData.login}`} target='_blank' className='text-xl font-semibold'>@{filteredData.login}</a>
                <h2 className='text-xl font-semibold italic'>Rank: #{filteredData?.rank}</h2>
                <div className='flex flex-wrap items-center justify-center gap-x-6'>
                    <p className='flex items-center gap-x-2 font-semibold text-lg'>
                        <span className='text-[#FB923C]'>
                            <FaTrophy />
                        </span>
                        Score: {filteredData.score}
                    </p>
                    <p className='flex items-center gap-x-2 font-semibold text-lg'>
                        <span className='text-[#FB923C]'>
                            <FaFireAlt />
                        </span>
                        Streak: {filteredData.streak}
                    </p>
                </div>
                <div className='text-sm'>
                    <p className='text-lg font-semibold my-2'>Contributions: {filteredData.pr_urls?.length || 0}</p>
                    <div className='max-h-[2rem] overflow-y-scroll'>
                        {filteredData.pr_urls?.map((item, index) => (
                            <a 
                                href={item} 
                                key={index} 
                                target='_blank' 
                                rel='noopener noreferrer' 
                                className='pb-2 block w-[30ch] md:w-[35ch] overflow-hidden text-ellipsis whitespace-nowrap'
                            >
                                {index + 1 + '. '} {item}
                            </a>
                        ))}
                    </div>
                </div>
                <img 
                    src="https://gssoc.girlscript.tech/GS_logo_Black.svg" 
                    alt="GSSOC" 
                    className='w-[8rem] mt-2' 
                />
            </div>
            {/* <Button
                label='Download'
                handleFunc={handleDownload}
                className='bg-[#FB923C] w-full mt-4'
            /> */}
        </div>
    );
}

export default ContributionCard;
