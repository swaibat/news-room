import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { NavLink, Redirect } from 'react-router-dom';
import UseRegister from './UseRegister';

const Register = () => {
	const { isOpen, RegisterErrors, user, showModal, hideModal, handleInput, handleSubmit, logOut } = UseRegister();
	return (
		<>
			{user ? (
				<>
					<div className='d-flex'>
						<NavLink className='btn btn-outline-primary' activeClassName='active' to='/news'>
							{user.preference} News
						</NavLink>
						<button type='button' className='btn btn-outline-primary ml-3'>
							{user.username}
						</button>
						<button type='button' className='btn btn-outline-secondary ml-3' onClick={logOut}>
							Logout
						</button>
					</div>
					<Redirect to='/news' />
				</>
			) : (
				<>
					<Redirect to='/' />
					<button type='button' className='btn btn-primary' onClick={showModal}>
						Register
					</button>
				</>
			)}
			<Modal show={isOpen} onHide={hideModal}>
				<form>
					<Modal.Header>
						<Modal.Title>Register</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className='form-group'>
							<input type='text' className='form-control' placeholder='username' id='username' onInput={handleInput} />
							{RegisterErrors && RegisterErrors.match('username') && <small className='form-text text-danger'>{RegisterErrors}</small>}
						</div>
						<div className='form-group'>
							<select className='form-control' id='preference' onInput={handleInput}>
								<option value=''>select Prefered news</option>
								<option value='bitcoin'>bitcoin</option>
								<option value='Apple'>Apple</option>
								<option value='earthquake'>Earthquake</option>
								<option value='animal'>Animal</option>
							</select>
							{RegisterErrors && RegisterErrors.match('preference') && <small className='form-text text-danger'>{RegisterErrors}</small>}
						</div>
					</Modal.Body>
					<Modal.Footer>
						<button type='button' className='btn btn-secondary mr-auto' onClick={hideModal}>
							Cancel
						</button>
						<button className='btn btn-primary' type='button' onClick={handleSubmit}>
							Register
						</button>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
};

export default Register;
