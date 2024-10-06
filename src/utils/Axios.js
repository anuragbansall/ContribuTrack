import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://gssoc24-leaderboard-backend-production-dfe3.up.railway.app',
    }
)