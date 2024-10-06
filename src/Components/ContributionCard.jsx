import React, { useRef } from 'react';
import { FaTrophy } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";
import domtoimage from 'dom-to-image';
import Button from './Button';

function ContributionCard({ cardData }) {
    const cardRef = useRef(null);

    const handleDownload = () => {
        if (cardRef.current) {
            domtoimage.toPng(cardRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = `${cardData.login}_gssoc_card.png`;
                    link.click();
                })
                .catch((error) => {
                    console.error('oops, something went wrong!', error);
                });
        }
    };

    if (!cardData) {
        return <h2>No User Found</h2>;
    }

    return (
        <div className='max-w-full overflow-x-hidden'>
            <div ref={cardRef} className='w-[20rem] max-w-full h-[25rem] bg-[#fff] text-slate-800 flex flex-col gap-2 items-center p-4 rounded-md relative'>
                <div className='flex-shrink-0 w-[8rem] max-w-full p-1 bg-[#FB923C] rounded-full overflow-hidden'>
                    <img 
                        src={cardData.avatar_url} 
                        alt={cardData.login} 
                        className='h-full w-full object-cover rounded-full' 
                        crossOrigin="anonymous" 
                    />
                </div>
                <h3 className='text-xl font-semibold'>{cardData.login}</h3>
                <div className='flex flex-wrap items-center justify-center gap-x-6'>
                    <p className='flex items-center gap-x-2 font-semibold text-lg'>
                        <span className='text-[#FB923C]'>
                            <FaTrophy />
                        </span>
                        Score: {cardData.score}
                    </p>
                    <p className='flex items-center gap-x-2 font-semibold text-lg'>
                        <span className='text-[#FB923C]'>
                            <FaFireAlt />
                        </span>
                        Streak: {cardData.streak}
                    </p>
                </div>
                <div className='text-sm overflow-hidden' style={{ height: '6rem' }}>
                    <p className='text-lg font-semibold my-2'>Contributions: {cardData.pr_urls?.length || 0}</p>
                    <div style={{ maxHeight: '6rem', overflowY: 'auto', paddingRight: '1rem' }}>
                        {cardData.pr_urls?.map((item, index) => (
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
            <Button
                label='Download'
                handleFunc={handleDownload}
                className='bg-[#FB923C] w-full mt-4'
            />
        </div>
    );
}

export default ContributionCard;
