import { useMemo, useState } from 'react';
import Api from '../Actions/Api';

const UseNews = (query) => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const getNews = () =>
		Api.TopHeadline(query)
			.then(({ data }) => {
				setNews(data.articles);
				setLoading(false);
			})
			.catch((error) => error);

	useMemo(() => getNews(), []);
	return { news, loading, getNews };
};

export default UseNews;
