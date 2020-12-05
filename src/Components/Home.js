import React from 'react';
import TopHeadlines from './BBCHeadlines';
import BusinessHeadlines from './TopUsHeadlines';

const Home = () => {
	return (
		<div className='container'>
			<div className='row'>
				<TopHeadlines />
				<BusinessHeadlines />
			</div>
		</div>
	);
};

export default Home;
