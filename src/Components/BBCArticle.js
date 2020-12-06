import React from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../Helpers/TimeAgo';
import convertToSlug from '../Helpers/MakeSlug';

const BBCArticle = ({ news }) => {
	return news.map((article) => (
		<Link
			className='list-group-item px-0'
			to={{
				pathname: `/news/${convertToSlug(article.title)}`,
				state: article,
			}}
			key={article.title}
		>
			<div className='headline-img-holder'>
				<img src={article.urlToImage} alt={article.title} />
			</div>
			<div className='d-flex flex-column'>
				<p className='text-primary mb-0'>{article.title}</p>
				<small className='text-muted mb-3'>{timeAgo.format(new Date(article.publishedAt))}</small>
			</div>
		</Link>
	));
};

export default BBCArticle;
