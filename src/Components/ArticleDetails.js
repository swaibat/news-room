import React from 'react';
import PropTypes from 'prop-types';
import timeAgo from '../Helpers/TimeAgo';

const ArticleDetails = ({ location }) => {
	const article = location.state;
	return (
		<>
			{article && (
				<div className='col-md-7 mx-auto'>
					<div className='card'>
						<div className='card-body'>
							<div className='headline-img-holder'>
								<img className='img-fluid' src={article.urlToImage} alt={article.title} />
							</div>
							<div className='py-2 d-flex flex-column'>
								<div className='py-2 d-flex flex-column'>
									<small className='text-muted'>{timeAgo.format(new Date(article.publishedAt))}</small>
									<a className='ml-auto' href={article.url}>
										Article By {article.author}
									</a>
								</div>
								<h6 className='text-primary mb-0'>{article.title}</h6>
								<p>{article.description}</p>
							</div>
						</div>
						<div className='card-footer'>
							Read the Article Full Store here <a href={article.url}> {article.author} </a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

ArticleDetails.propTypes = {
	location: PropTypes.string.isRequired,
};

export default ArticleDetails;
