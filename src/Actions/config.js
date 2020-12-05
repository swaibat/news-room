import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://newsapi.org/v2/',
	timeout: 10000,
	headers: {
		Authorization: `Bearer 3198a951345d4dd7bc00b7fd4d01a888`,
	},
});

export default instance;
