import React, { useState, useMemo, useEffect } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, fetchUser } from '../../store/services';
import getTime from '../../helpers/pipeDuration';

const Courses = () => {
	const courses = useSelector((state) => state.coursesReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCourses());
	}, [courses]);

	const [searchValue, setSearchValue] = useState('');
	const [searchQuerry, setSearchQuerry] = useState('');

	const searchedCourses = useMemo(() => {
		return courses.filter(
			(course) =>
				course.title.toLowerCase().includes(searchQuerry.toLowerCase()) ||
				course.id.toLowerCase().includes(searchQuerry.toLowerCase())
		);
	}, [searchQuerry, courses]);

	return (
		<div className='border border-info border-2 d-flex flex-column gap-4 p-4'>
			<SearchBar
				type='text'
				onChange={(event) => {
					if (event.target.value.length > 0) {
						setSearchValue(event.target.value);
					} else {
						setSearchValue('');
						setSearchQuerry('');
					}
				}}
				onClick={() => setSearchQuerry(searchValue)}
				labelText='search'
				placeholderText='Enter course name or id...'
			/>
			{searchedCourses.map((course) => (
				<CourseCard key={course.id} course={course} getTime={getTime} />
			))}
		</div>
	);
};

export default Courses;
