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

export const addAuthor = async (name, user) => {
	try {
		await axios.post(
			'http://localhost:3000/authors/add',
			{
				name,
			},
			{
				headers: {
					Authorization: user.token,
				},
			}
		);
	} catch (e) {
		console.log(e);
	}
};

export const login = (name, email, password) => async (dispatch) => {
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

export const logout = (user) => async (dispatch) => {
	try {
		await axios.remove('http://localhost:3000/logout', {
			headers: {
				Authorization: user.token,
			},
		});

		dispatch(userSlice.actions.logout());
	} catch (e) {
		console.log(e);
	}
};

export const register = async (name, email, password) => {
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

export const addCourse = async (
	user,
	title,
	description,
	duration,
	authors
) => {
	try {
		await axios.post(
			'http://localhost:3000/courses/add',
			{
				title,
				description,
				duration,
				authors,
			},
			{
				headers: {
					Authorization: user.token,
				},
			}
		);
	} catch (e) {
		console.log(e);
	}
};

export const removeCourse = async (user, id) => {
	try {
		await axios.remove('http://localhost:3000/courses/' + id, {
			headers: {
				Authorization: user.token,
			},
		});
	} catch (e) {
		console.log(e);
	}
};

export const editCourse = async (user, id) => {
	try {
		await axios.put('http://localhost:3000/courses/' + id, {
			headers: {
				Authorization: user.token,
			},
		});
	} catch (e) {
		console.log(e);
	}
};

export const fetchUser = async (dispatch, user) => {
	try {
		const response = await axios.get('http://localhost:3000/users/me', {
			headers: {
				Authorization: user.token,
			},
		});

		dispatch(userSlice.actions.setUser(response.data.result));
	} catch (e) {
		console.log(e);
	}
};

export const checkAutoLogin = async (dispatch) => {
	await dispatch(userSlice.actions.getUser());
};
