import axios from 'axios';
// import { coursesSlice } from './reducers/courses/CoursesSlice';
// import { authorsSlice } from './reducers/authors/AuthorsSlice';
// import { userSlice } from './reducers/user/UserSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk(
	'courses/fetchAll',
	async (_, thunkApi) => {
		try {
			const response = await axios.get('http://localhost:4000/courses/all');
			return response.data.result;
		} catch (e) {
			console.log(e);
		}
	}
);

export const fetchAuthors = createAsyncThunk(
	'authors/fetchAll',
	async (_, thunkApi) => {
		try {
			const response = await axios.get('http://localhost:4000/authors/all');
			return response.data.result;
		} catch (e) {
			console.log(e);
		}
	}
);

export const addAuthor = createAsyncThunk(
	'authors/addAuthor',
	async (obj, thunkApi) => {
		try {
			const name = obj.newAuthorValue;
			const user = obj.user;

			const response = await axios.post(
				'http://localhost:4000/authors/add',
				{
					name,
				},
				{
					headers: {
						Authorization: user.token,
					},
				}
			);
			console.log(response.data.result);
			return response.data.result;
		} catch (e) {
			console.log(e);
		}
	}
);

export const login = createAsyncThunk('user/login', async (obj, thunkApi) => {
	try {
		const name = obj.name;
		const email = obj.email;
		const password = obj.password;

		const response = await axios.post('http://localhost:4000/login', {
			name,
			email,
			password,
		});

		return response.data;
	} catch (e) {
		console.log(e);
	}
});

export const logout = createAsyncThunk(
	'user/logout',
	async (user, thunkApi) => {
		try {
			await axios.delete('http://localhost:4000/logout', {
				headers: {
					Authorization: user.token,
				},
			});
			return;
		} catch (e) {
			console.log(e);
		}
	}
);

export const register = async (name, email, password) => {
	try {
		await axios.post('http://localhost:4000/register', {
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
			'http://localhost:4000/courses/add',
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

export const removeCourse = createAsyncThunk(
	'courses/removeCourse',
	async (obj, thunkApi) => {
		try {
			const user = obj.user;
			const id = obj.id;

			await axios.delete('http://localhost:4000/courses/' + id, {
				headers: {
					Authorization: user.token,
				},
			});

			return id;
		} catch (e) {
			console.log(e);
		}
	}
);

export const editCourse = async (
	user,
	id,
	title,
	description,
	duration,
	authors
) => {
	try {
		await axios.put(
			'http://localhost:4000/courses/' + id,
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

		// dispatch(
		// 	coursesSlice.actions.editCourse({ id, ...response.data.result })
		// );
	} catch (e) {
		console.log(e);
	}
};

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async (user, thunkApi) => {
		try {
			const response = await axios.get('http://localhost:4000/users/me', {
				headers: {
					Authorization: user.token,
				},
			});
			return response.data.result;
		} catch (e) {
			console.log(e);
		}
	}
);

export const checkAutoLogin = createAsyncThunk(
	'user/checkAutoLogin',
	async (_, thunkApi) => {
		console.log(1);
		return '';
	}
);
