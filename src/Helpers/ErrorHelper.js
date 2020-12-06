const getError = (error) => {
	if (error.response) {
		return 'Oooops!! We are unable to process your Request Try agin later';
	}
	return 'Oooops!! cant fetch data, Connection to the server lost';
};

export default getError;
