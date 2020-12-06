import React from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../Helpers/TimeAgo';
import convertToSlug from '../Helpers/MakeSlug';

const BBCArticle = ({ news }) => {
	return news.map((article) => (
		<li className='list-group-item px-0' key={article.title}>
			<Link
				className='text-primary mb-0'
				to={{
					pathname: `/news/${convertToSlug(article.title)}`,
					state: article,
				}}
			>
				{article.title}
			</Link>
			<small className='text-muted mb-3'>{timeAgo.format(new Date(article.publishedAt))}</small>
			<div className='headline-img-holder'>
				<img src={article.urlToImage} alt={article.title} />
			</div>
		</li>
	));
};

export default BBCArticle;
