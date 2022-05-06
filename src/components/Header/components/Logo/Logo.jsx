import React from 'react';

export default function Logo() {
	return (
		<div className='navbar-brand d-flex align-items-center justify-content-center text-primary gap-1'>
			<svg
				className='position-relative'
				style={{ width: '60px' }}
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth='2'
			>
				<path d='M12 14l9-5-9-5-9 5 9 5z' />
				<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
				/>
			</svg>
			<div className='d-inline-block m-0 h1'>Courses</div>
		</div>
	);
}
