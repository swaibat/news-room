import Router from './config';

const Api = {
	TopHeadline(query) {
		return Router.get(`${query}`);
	},
};

export default Api;
