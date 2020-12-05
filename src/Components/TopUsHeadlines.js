import React from 'react';
import PreLoader from './PreLoader';
import NoArticles from './NotArticles';
import UseNews from './UseNews';
import TopUsArticle from './TopUsArticle';

const BusinessHeadlines = () => {
	const { news, loading } = UseNews('country=us');
	return (
		<div className='col-md-9'>
			<div className='card'>
				<div className='card-header'>Top Headlines</div>
				<div className='card-body row'>
					<TopUsArticle news={news} />
					{!loading && !news.length && <NoArticles />}
					{loading && <PreLoader />}
				</div>
			</div>
		</div>
	);
};

export default BusinessHeadlines;
