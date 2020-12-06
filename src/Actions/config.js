import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://newsapi.org/v2/',
	timeout: 10000,
	headers: {
		Authorization: `Bearer ${process.env.NEWS_API_KEYS}`,
	},
});

export default instance;
