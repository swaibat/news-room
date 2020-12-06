import { useMemo, useState } from 'react';
import Api from '../Actions/Api';
import GetErrors from '../Helpers/ErrorHelper';

const UseNews = (query) => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errors, setErrors] = useState('');
	const getNews = () =>
		Api.TopHeadline(query)
			.then(({ data }) => {
				setNews(data.articles);
				setLoading(false);
			})
			.catch((err) => {
				setErrors(GetErrors(err));
			});

	useMemo(() => getNews(), []);
	return { news, loading, errors };
};

export default UseNews;
