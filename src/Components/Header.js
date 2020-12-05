import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Register from './Register';

const Header = () => (
	<div className='shadow-sm mb-4 bg-white'>
		<nav className='navbar container navbar-expand-lg navbar-light'>
			<Link className='navbar-brand' to='/'>
				News Room
			</Link>
			<button className='navbar-toggler' type='button'>
				<span className='navbar-toggler-icon' />
			</button>
			<div className='collapse navbar-collapse'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<NavLink className='nav-link' to='/news'>
							News
						</NavLink>
					</li>
				</ul>
				<div className='ml-auto'>
					<Register />
				</div>
			</div>
		</nav>
	</div>
);

export default Header;
