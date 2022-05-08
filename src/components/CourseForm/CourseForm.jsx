import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import {
	addCourse,
	editCourse,
	addAuthor,
	fetchAuthors,
	fetchCourses,
} from '../../store/services';
import getTime from '../../helpers/pipeDuration';

const CourseForm = (props) => {
	const { courseId } = useParams();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.userReducer);
	const authors = useSelector((state) => state.authorsReducer);
	const courses = useSelector((state) => state.coursesReducer);
	console.log('courses', courses);

	const course = courses.find((b) => b.id === courseId) || {};

	useEffect(() => {
		console.log('effect');
		dispatch(fetchAuthors());
	}, []);

	const [availableAuthors, setAvailableAuthors] = useState(authors);
	const [addedAuthors, setAddedAuthors] = useState([]);

	if (authors.length !== availableAuthors.length && addedAuthors.length === 0) {
		// if (props.formType === 'create') {
		// 	setAvailableAuthors(authors);
		// } else {
		// 	setAvailableAuthors(
		// 		authors.filter((a) => addedAuthors.some((b) => a === b))
		// 	);
		// }
		setAvailableAuthors(authors);
	}

	console.log('course', course);
	const [courseTitle, setCourseTitle] = useState(
		props.formType === 'create' ? '' : course.title
	);
	const [courseDescription, setCourseDescription] = useState(
		props.formType === 'create' ? '' : course.description
	);
	const [newAuthorValue, setNewAuthorValue] = useState('');

	const [duration, setDuration] = useState(
		props.formType === 'create' ? '' : course.duration
	);

	// const [courseTitle, setCourseTitle] = useState('');
	// const [courseDescription, setCourseDescription] = useState('');
	// const [newAuthorValue, setNewAuthorValue] = useState('');
	// const [duration, setDuration] = useState('');

	// if (Object.keys(course).length !== 0 && props.formType === 'update') {
	// 	console.log(2222);
	// 	setCourseTitle(course.title);
	// }

	// if (!!course && props.formType === 'update') {
	// 	setCourseTitle(course.title);
	// 	setCourseDescription(course.description);
	// 	setDuration(course.duration);
	// }

	return (
		<div className='border border-info border-2 d-flex flex-column gap-4 p-4'>
			<Button onClick={props.onCancel} title='Cancel' />
			<div className='d-flex flex-wrap align-items-end justify-content-between'>
				<Input
					value={courseTitle}
					onChange={(event) => setCourseTitle(event.target.value)}
					inputName='Title'
					placeholder='Enter title...'
					type='text'
				/>
				<Button
					title={props.saveButtonTitle}
					onClick={() => {
						if (
							courseTitle &&
							courseDescription &&
							duration &&
							addedAuthors.length > 0
						) {
							// eslint-disable-next-line no-lone-blocks
							{
								props.formType === 'create'
									? dispatch(
											addCourse(
												user,
												courseTitle,
												courseDescription,
												+duration,
												addedAuthors.map((author) => author.id)
											)
									  )
									: dispatch(editCourse(user, props.course.id));
							}
							navigate('/courses');
						} else {
							alert('Please, fill in all fields');
						}
					}}
				/>
			</div>
			<Input
				value={courseDescription}
				onChange={(event) => setCourseDescription(event.target.value)}
				inputName='Description'
				type='textarea'
				placeholder='Enter description...'
			/>
			<div className='border border-dark border-2 p-4'>
				<div className='row'>
					<div className='col-md-6 p-4'>
						<h5 className='text-center'>Add author</h5>
						<Input
							onChange={(event) => {
								if (event.target.value.length > 0) {
									setNewAuthorValue(event.target.value);
								} else {
									setNewAuthorValue('');
								}
							}}
							style={{ width: '100%' }}
							inputName='Author name'
							placeholder='Enter author name...'
							type='text'
						/>
						<Button
							onClick={() => {
								if (newAuthorValue) {
									dispatch(addAuthor(newAuthorValue, user));
								}
							}}
							title='Create author'
							style={{ margin: '16px auto auto', display: 'block' }}
						/>
					</div>
					<div className='d-flex flex-column gap-3 col-md-6 p-4'>
						<h5 className='text-center'>Authors</h5>
						{availableAuthors.length > 0 ? (
							availableAuthors.map((author) => (
								<div
									key={author.id}
									className='d-flex flex-row align-items-center justify-content-between'
								>
									{author.name}
									<Button
										title='Add author'
										onClick={() => {
											const arr = availableAuthors.filter(
												(a) => a.id !== author.id
											);
											setAvailableAuthors(arr);
											if (addedAuthors.length > 0) {
												setAddedAuthors([...addedAuthors, author]);
											} else {
												setAddedAuthors([author]);
											}
										}}
									/>
								</div>
							))
						) : (
							<p className='text-center'>Author list is empty</p>
						)}
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 p-4'>
						<h5 className='text-center'>Duration</h5>
						<Input
							value={duration}
							onChange={(event) => setDuration(event.target.value)}
							style={{ width: '100%' }}
							inputName='Duration'
							placeholder='Enter duration in minutes...'
							type='numbers'
						/>
						{duration ? (
							<p className='fs-4'>
								Duration:{' '}
								<span className='fs-3 fw-bold'>{getTime(duration)}</span> hours
							</p>
						) : (
							<p className='fs-4'>
								Duration: <span className='fs-3 fw-bold'>00:00</span> hours
							</p>
						)}
					</div>
					<div className='col-md-6 d-flex flex-column gap-3 col-md-6 p-4'>
						<h5 className='text-center'>Course authors</h5>
						{addedAuthors.length > 0 ? (
							addedAuthors.map((author) => (
								<div
									key={author.id}
									className='d-flex flex-row align-items-center justify-content-between'
								>
									{author.name}
									<Button
										title='Delete author'
										onClick={() => {
											const arr = addedAuthors.filter(
												(a) => a.id !== author.id
											);
											setAddedAuthors(arr);
											if (availableAuthors.length > 0) {
												setAvailableAuthors([...availableAuthors, author]);
											} else {
												setAvailableAuthors([author]);
											}
										}}
									/>
								</div>
							))
						) : (
							<p className='text-center'>Author list is empty</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseForm;
