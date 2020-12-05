const localStore = {
	storeUser(data) {
		data && localStorage.setItem('news_user', JSON.stringify(data));
	},
	getUser() {
		const user = localStorage.getItem('news_user');
		return user ? JSON.parse(user) : null;
	},
	removeUser() {
		localStorage.removeItem('news_user');
	},
	setPreference() {
		const user = this.getUser();
		return user ? `q=${user.preference}&` : '';
	},
};

export default localStore;
