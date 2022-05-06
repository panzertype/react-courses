import React, { useState, useMemo, useEffect } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../store/services';
import { noEffectSlice } from '../../store/reducers/custom/noEffectSlice';
import getTime from '../../helpers/pipeDuration';

const Courses = () => {
	const courses = useSelector((state) => state.coursesReducer);
	const noEffect = useSelector((state) => state.noEffectReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!noEffect.courses) {
			dispatch(fetchCourses());
		} else {
			dispatch(noEffectSlice.actions.toggleCoursesState());
		}
	}, []);

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
			{searchedCourses.map((post, index) => (
				<CourseCard key={post.id} post={post} getTime={getTime} />
			))}
		</div>
	);
};

export default Courses;
