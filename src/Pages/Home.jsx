import React, { useContext, useEffect, useState } from 'react';
import Container from '../Components/Container';
import DetailForm from '../Components/DetailForm';
import ContributionCard from '../Components/ContributionCard';
import { Outlet } from 'react-router-dom';

function Home() {

    return (
        <Container>
            <div className='flex flex-col md:flex-row mt-12 gap-y-12 pb-8'>
                <div className='md:w-1/2 flex justify-center'>
                    <DetailForm />
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <Outlet />
                </div>
            </div>
        </Container>
    );
}

export default Home;
