import React from 'react';
import PreLoader from './PreLoader';
import NoArticles from './NotArticles';
import UseNews from './UseNews';
import Article from './SingleArticle';
import localStore from '../Helpers/LocalStore';
import ErrorMessage from './ErrorMessage';

const News = () => {
	const { news, loading, errors } = UseNews(`everything?${localStore.setPreference()}`);
	return (
		<div className='container'>
			<div className='col-md-12 mx-auto'>
				<div className='card'>
					<div className='card-header'>Top Headlines</div>
					<div className='card-body row'>
						<Article news={news} />
						{!loading && !news.length && <NoArticles />}
						{loading && !errors && <PreLoader />}
						{errors && <ErrorMessage errors={errors} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
