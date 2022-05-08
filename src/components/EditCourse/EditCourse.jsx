import React, { useEffect } from 'react';
import CourseForm from '../CourseForm/CourseForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../store/services';

const EditCourse = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('parent effect');
		dispatch(fetchCourses());
	});

	return (
		<CourseForm
			onCancel={() => {
				navigate('/courses');
			}}
			saveButtonTitle='Update course'
			formType='update'
		/>
	);
};

export default EditCourse;
