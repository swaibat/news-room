import Router from './config';

const Api = {
	TopHeadline(query) {
		return Router.get(`top-headlines?${query}`);
	},
};

export default Api;
