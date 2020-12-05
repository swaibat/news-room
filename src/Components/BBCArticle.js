import React from 'react';
import timeAgo from '../Helpers/TimeAgo';

const BBCArticle = ({ news }) => {
	return news.map((article) => (
		<li className='list-group-item px-0' key={article.title}>
			<p className='text-primary mb-0'>{article.title}</p>
			<small className='text-muted mb-3'>{timeAgo.format(new Date(article.publishedAt))}</small>
			<div className='headline-img-holder'>
				<img src={article.urlToImage} alt={article.title} />
			</div>
		</li>
	));
};

export default BBCArticle;
