import React, { useEffect } from 'react';
import Courses from '../Courses/Courses';
import CreateCourse from '../CourseForm/CourseForm';
import CourseInfo from '../CourseInfo/CourseInfo';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import { Layout } from '../Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkAutoLogin, fetchUser } from '../../store/services';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userReducer);

	useEffect(() => {
		checkAutoLogin(dispatch);
		if (user.token) {
			fetchUser(dispatch, user);
		}
	});

	return (
		<Routes>
			<Route index element={<Navigate to='/login' />} />
			<Route path='/' element={<Layout />}>
				<Route path='login' element={<Login />} />
				<Route path='registration' element={<Registration />} />
				{!!user.isAuth ? (
					<>
						<Route path='courses' element={<Courses />} />
						<Route path='courses/:courseId' element={<CourseInfo />} />
					</>
				) : (
					''
				)}
				{!!user.isAuth && user.role === 'admin' ? (
					<Route path='courses/add' element={<CreateCourse />} />
				) : (
					''
				)}
				<Route path='*' element={<Login />} />
			</Route>
		</Routes>
	);
};
