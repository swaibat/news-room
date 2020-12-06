import React, { useState, useEffect } from 'react';
import TopHeadlines from './BBCHeadlines';
import BusinessHeadlines from './TopUsHeadlines';
import localStore from '../Helpers/LocalStore';

const Home = () => {
	const [user, setUser] = useState({});
	useEffect(() => setUser(localStore.getUser()));
	return (
		<div className='container'>
			{!user && (
				<div className='alert alert-warning' role='alert'>
					Please Register to save your prefered/Favourite news source
				</div>
			)}
			<div className='row'>
				<TopHeadlines />
				<BusinessHeadlines />
			</div>
		</div>
	);
};

export default Home;
