import React from 'react';
import CourseForm from '../CourseForm/CourseForm';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
	const navigate = useNavigate();

	return (
		<CourseForm
			onCancel={() => {
				navigate('/courses');
			}}
			saveButtonTitle='Create course'
			formType='create'
		/>
	);
};

export default CreateCourse;
