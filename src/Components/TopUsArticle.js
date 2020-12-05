import React from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../Helpers/TimeAgo';

const TopUsArticle = ({ news }) => {
	return news.map((article, index) => (
		<div className={`col-md-${!index ? '12' : '4'} mb-3`} key={article.title}>
			<div className='headline-img-holder'>
				<img src={article.urlToImage} alt={article.title} />
			</div>
			<div className='py-2 d-flex flex-column'>
				<Link className='text-primary mb-0' to='/'>
					{article.title}
				</Link>
				<small className='text-muted'>{timeAgo.format(new Date(article.publishedAt))}</small>
			</div>
		</div>
	));
};

export default TopUsArticle;
