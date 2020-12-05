import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
