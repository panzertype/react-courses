import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../store/services';

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<div className='d-flex flex-column gap-3'>
				<h2 className='text-center mt-4'>Log in</h2>
				<form
					className='mx-auto col-12 col-md-6 d-flex flex-column gap-4'
					onSubmit={(event) => {
						event.preventDefault();
						dispatch(login(name, email, password));
						navigate('/courses');
					}}
				>
					<Input
						value={name}
						onChange={(event) => setName(event.target.value)}
						className='w-100'
						inputName='Name'
						placeholder='Enter name...'
						type='text'
					/>
					<Input
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						className='w-100'
						inputName='Email'
						placeholder='Enter email...'
						type='text'
					/>
					<Input
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						className='w-100'
						inputName='Password'
						placeholder='Enter password...'
						type='text'
					/>
					<Button
						className='mx-auto'
						style={{ maxWidth: '200px' }}
						title='Log in'
					/>
				</form>
				<p className='mx-auto'>
					If you don't have an account you can{' '}
					<Link to='/registration'>Register</Link>
				</p>
			</div>
		</>
	);
}

export default Login;
