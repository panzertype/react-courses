import { createSlice } from '@reduxjs/toolkit';
import { login } from '../../services';
import { logout } from '../../services';
import { fetchUser } from '../../services';
import { checkAutoLogin } from '../../services';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUser(state) {
			const user = JSON.parse(localStorage.getItem('user'));
			const token = localStorage.getItem('token');

			if (user && token) {
				state.isAuth = true;
				state.name = user.name;
				state.email = user.email;
				state.token = token;
			}
		},
	},
	extraReducers: {
		[login.fulfilled.type]: (state, action) => {
			localStorage.setItem('token', action.payload.result);
			localStorage.setItem('user', JSON.stringify(action.payload.user));

			state.isAuth = true;
			state.name = action.payload.user.name;
			state.email = action.payload.user.email;
			state.token = action.payload.result;
		},
		[logout.fulfilled.type]: (state) => {
			localStorage.removeItem('token');
			localStorage.removeItem('user');

			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
			state.role = '';
		},
		[fetchUser.fulfilled.type]: (state, action) => {
			state.isAuth = true;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.role = action.payload.role;
		},
		[checkAutoLogin.fulfilled.type]: (state) => {
			const user = JSON.parse(localStorage.getItem('user'));
			const token = localStorage.getItem('token');

			if (user && token) {
				state.isAuth = true;
				state.name = user.name;
				state.email = user.email;
				state.token = token;
			}
		},
	},
});

export default userSlice.reducer;
