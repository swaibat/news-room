import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ errors }) => (
	<div className='d-flex align-items-center justify-content-around p-5 w-100'>
		<h4>{errors}</h4>
	</div>
);
ErrorMessage.propTypes = {
	errors: PropTypes.string.isRequired,
};
export default ErrorMessage;
