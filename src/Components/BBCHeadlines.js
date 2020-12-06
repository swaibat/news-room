import React from 'react';
import PreLoader from './PreLoader';
import NoArticles from './NotArticles';
import UseNews from './UseNews';
import BBCArticle from './BBCArticle';

const BbcHeadlines = () => {
	const { news, loading, errors } = UseNews('top-headlines?sources=bbc-news');
	return (
		<div className='col-md-3'>
			<div className='card'>
				<div className='card-header'>Top BBC Headlines</div>
				<div className='card-body'>
					<ul className='list-group list-group-flush'>
						<BBCArticle news={news} />
						{!loading && !news.length && <NoArticles />}
						{loading && !errors && <PreLoader />}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BbcHeadlines;
