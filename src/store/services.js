import axios from 'axios';
import { coursesSlice } from './reducers/courses/CoursesSlice';
import { authorsSlice } from './reducers/authors/AuthorsSlice';
import { userSlice } from './reducers/user/UserSlice';

export const fetchCourses = () => async (dispatch) => {
	try {
		const response = await axios.get('http://localhost:3000/courses/all');
		dispatch(coursesSlice.actions.setCourses(response.data.result));
	} catch (e) {
		console.log(e);
	}
};

export const fetchAuthors = () => async (dispatch) => {
	try {
		const response = await axios.get('http://localhost:3000/authors/all');
		dispatch(authorsSlice.actions.setAuthors(response.data.result));
	} catch (e) {
		console.log(e);
	}
};

export const auth = (name, email, password) => async (dispatch) => {
	try {
		const response = await axios.post('http://localhost:3000/login', {
			name,
			email,
			password,
		});

		dispatch(userSlice.actions.login(response.data));
	} catch (e) {
		console.log(e);
	}
};

export const register = (name, email, password) => async () => {
	try {
		await axios.post('http://localhost:3000/register', {
			name,
			email,
			password,
		});
	} catch (e) {
		console.log(e);
	}
};
