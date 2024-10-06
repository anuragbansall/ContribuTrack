import axios from 'axios';

const AxiosInstance = axios.create(
    {
        baseURL: 'https://gssoc24-leaderboard-backend-production-dfe3.up.railway.app',
    }
)

export default AxiosInstance;