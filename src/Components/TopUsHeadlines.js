import React from 'react';
import PreLoader from './PreLoader';
import NoArticles from './NotArticles';
import UseNews from './UseNews';
import TopUsArticle from './TopUsArticle';
import ErrorMessage from './ErrorMessage';

const BusinessHeadlines = () => {
	const { news, loading, errors } = UseNews('top-headlines?country=us');
	return (
		<div className='col-md-9'>
			<div className='card'>
				<div className='card-header'>Top Headlines</div>
				<div className='card-body row'>
					<TopUsArticle news={news} />
					{!loading && !news.length && <NoArticles />}
					{loading && !errors && <PreLoader />}
					{errors && <ErrorMessage errors={errors} />}
				</div>
			</div>
		</div>
	);
};

export default BusinessHeadlines;
