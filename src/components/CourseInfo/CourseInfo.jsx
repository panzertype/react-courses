import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import getTime from '../../helpers/pipeDuration';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../store/services';
import { fetchAuthors } from '../../store/services';

const CourseInfo = () => {
	const { courseId } = useParams();

	const courses = useSelector((state) => state.coursesReducer);
	const authors = useSelector((state) => state.authorsReducer);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!courses.length > 0) {
			dispatch(fetchCourses());
		}
		if (!authors.length > 0) {
			dispatch(fetchAuthors());
		}
	}, []);

	const course = courses.find((b) => b.id === courseId);

	const findAuthors = (array) => {
		const arr = [];
		array.forEach((a) => {
			const foundIndex = authors.find((b) => b.id === a);
			if (foundIndex) {
				arr.push(foundIndex.name);
			}
		});
		return arr;
	};

	return (
		<div className='border border-info border-2 p-4'>
			<Link to='/courses'>&lt; Back to courses</Link>
			{course ? (
				<>
					<h2 className='text-center'>{course.title}</h2>
					<div className='row'>
						<div className='col-md-8'>{course.description}</div>
						<div className='col-md-4'>
							<div>
								<span className='fw-bold'>ID: </span>
								{course.id}
							</div>
							<div>
								<span className='fw-bold'>Duration: </span>
								{getTime(course.duration)} hours
							</div>
							<div>
								<span className='fw-bold'>Created: </span>
								{course.creationDate}
							</div>
							<div>
								<span className='fw-bold'>Authors: </span>
								{findAuthors(course.authors).join(', ')}
							</div>
						</div>
					</div>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default CourseInfo;
