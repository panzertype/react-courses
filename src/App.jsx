import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles/App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CourseForm/CourseForm';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from './components/PrivateRouter/PrivateRouter';
import { Layout } from './components/Layout/Layout';

function App() {
	useSelector((state) => state.userReducer);
	const token = localStorage.getItem('token');

	return (
		<div className='container'>
			<div className='App'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route path='login' element={<Login />} />
							<Route path='registration' element={<Registration />} />
							<Route element={<ProtectedRoute isAllowed={!!token} />}>
								<Route path='courses' element={<Courses />} />
								<Route path='courses/:courseId' element={<CourseInfo />} />
								<Route path='courses/add' element={<CreateCourse />} />
							</Route>
							<Route path='*' element={<Navigate to='/courses' />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
