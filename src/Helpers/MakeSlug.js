function convertToSlug(Text) {
	return Text.toLowerCase()
		.replace(/[^\w ]+/g, '')
		.replace(/ +/g, '-');
}

export default convertToSlug;
