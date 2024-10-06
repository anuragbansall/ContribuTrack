import React, { useContext, useEffect, useState } from 'react';
import Container from '../Components/Container';
import DetailForm from '../Components/DetailForm';
import ContributionCard from '../Components/ContributionCard';
import AxiosInstance from '../utils/Axios';
import UsernameContext from '../Context/UsernameContext';

function Home() {
    const { username } = useContext(UsernameContext);
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
        const filtered = userData.filter(user => user?.login?.toLowerCase() === name.toLowerCase());
        setFilteredData(filtered[0] || null);
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

    return (
        <Container>
            <div className='flex flex-col md:flex-row mt-12 gap-y-12 pb-8'>
                <div className='md:w-1/2 flex justify-center'>
                    <DetailForm />
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    {loading ? (
                        <h2>Loading...</h2>
                    ) : (
                        <ContributionCard
                            cardData={filteredData}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
}

export default Home;
