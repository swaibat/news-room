import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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
					<NavLink className='btn btn-primary' to='/register'>
						Register
					</NavLink>
					<NavLink className='btn btn-outline-primary ml-3' to='/login'>
						Login
					</NavLink>
				</div>
			</div>
		</nav>
	</div>
);

export default Header;
