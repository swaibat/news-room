import React from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../Helpers/TimeAgo';
import convertToSlug from '../Helpers/MakeSlug';

const TopUsArticle = ({ news }) => {
	return news.map((article, index) => (
		<Link
			to={{
				pathname: `/news/${convertToSlug(article.title)}`,
				state: article,
			}}
			className={`col-md-${!index ? '12' : '4'} mb-3`}
			key={article.title}
		>
			<div className='headline-img-holder'>
				<img src={article.urlToImage} alt={article.title} />
			</div>
			<div className='py-2 d-flex flex-column'>
				<p className='text-primary mb-0'>{article.title}</p>
				<small className='text-muted'>{timeAgo.format(new Date(article.publishedAt))}</small>
			</div>
		</Link>
	));
};

export default TopUsArticle;
