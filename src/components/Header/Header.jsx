import React, { useEffect } from 'react';
import Logo from '../Header/components/Logo/Logo';
import Button from '../../common/Button/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { userSlice } from '../../store/reducers/user/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/services';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const hideData = ['/login', '/registration'];

	const user = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userSlice.actions.getUser());
	}, []);

	return (
		<nav className='border border-danger border-2 navbar px-4 py-1'>
			<Logo />
			{user.isAuth && !hideData.some((p) => p === location.pathname) && (
				<ul className='navbar-nav flex-row gap-3 ms-auto'>
					<li className='align-self-center'>{user.name}</li>
					<li>
						<Button
							onClick={() => {
								dispatch(logout(user));
								navigate('/login');
							}}
							title='Logout'
						/>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Header;
