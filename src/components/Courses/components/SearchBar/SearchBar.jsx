import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

const SearchBar = (props) => {
	const navigate = useNavigate();

	return (
		<div className='d-flex flex-wrap gap-3'>
			<Input
				value={props.value}
				type={props.type}
				onChange={props.onChange}
				className='course-search border border-warning border-2 p-2'
				placeholder={props.placeholderText}
				ariaLabel={props.labelText}
			/>
			<Button onClick={props.onClick} title='Search' />
			<Button
				className='ms-auto'
				onClick={() => navigate('/courses/add')}
				title='Add new course'
			/>
		</div>
	);
};

export default SearchBar;
