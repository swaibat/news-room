import React from 'react';

const PreLoader = () => (
	<div className='d-flex align-items-center justify-content-around p-5 w-100'>
		<div className='spinner-border' role='status'>
			<span className='sr-only'>Loading...</span>
		</div>
	</div>
);

export default PreLoader;
