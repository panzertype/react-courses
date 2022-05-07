import React, { useEffect } from 'react';
import Button from '../../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors } from '../../../../store/services';
import { coursesSlice } from '../../../../store/reducers/courses/CoursesSlice';
import { noEffectSlice } from '../../../../store/reducers/custom/noEffectSlice';

const CourseCard = (props) => {
	const navigate = useNavigate();
	const userData = useSelector((state) => state.userReducer);

	const authors = useSelector((state) => state.authorsReducer);
	const noEffect = useSelector((state) => state.noEffectReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!noEffect.authors) {
			dispatch(fetchAuthors());
		} else {
			dispatch(noEffectSlice.actions.toggleAuthorsState());
		}
	}, []);

	const getAuthors = (checkArr, authorsArr) => {
		const arr = [];
		checkArr.forEach((a) => {
			const foundIndex = authorsArr.find((b) => b.id === a);
			if (foundIndex) {
				arr.push(foundIndex.name);
			}
		});
		return arr;
	};

	return (
		<div className='border border-success border-2 p-4'>
			<div className='row'>
				<div className='col-md-8'>
					<h2 className='mb-3'>{props.post.title}</h2>
					<p>{props.post.description}</p>
				</div>
				<div className='col-md-4'>
					<div
						style={{
							textOverflow: 'ellipsis',
							overflow: 'hidden',
							whiteSpace: 'nowrap',
						}}
					>
						<span className='fw-bold'>Authors: </span>
						<>{getAuthors(props.post.authors, authors).join(', ')}</>
					</div>
					<div>
						<span className='fw-bold'>Duration: </span>
						{props.getTime(props.post.duration)} hours
					</div>
					<div>
						<span className='fw-bold'>Created: </span>
						{props.post.creationDate}
					</div>
					<Button
						onClick={() => navigate('/courses/' + props.post.id)}
						style={{ margin: '16px 16px 0 0', display: 'inline-block' }}
						title='Show course'
					/>
					{userData.isAuth && userData.role === 'admin' ? (
						<>
							<Button
								style={{
									margin: '16px 16px 0 0',
									width: '40px',
									padding: '5px',
									display: 'inline-block',
								}}
								title='&#128394;'
							/>
							<Button
								style={{
									width: '40px',
									padding: '5px',
									display: 'inline-block',
								}}
								onClick={() =>
									dispatch(coursesSlice.actions.removeCourse(props.post))
								}
								title='&#128465;'
							/>
						</>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
