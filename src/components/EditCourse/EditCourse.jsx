import React from 'react';
import CourseForm from '../CourseForm/CourseForm';
import { useNavigate } from 'react-router-dom';

const EditCourse = () => {
	const navigate = useNavigate();

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
