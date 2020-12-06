import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import News from './Components/News';
import ArticleDetails from './Components/ArticleDetails';
import NoMatch from './Components/NoMatch';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/news' component={News} />
				<Route exact path='/news/:slug' component={ArticleDetails} />
				<Route path='*' component={NoMatch} />
			</Switch>
		</Router>
	);
};

export default App;
