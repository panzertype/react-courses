import { createSlice } from '@reduxjs/toolkit';

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
		setUser(state, action) {
			state.isAuth = true;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.role = action.payload.role;
		},
		login(state, action) {
			localStorage.setItem('token', action.payload.result);
			localStorage.setItem('user', JSON.stringify(action.payload.user));

			state.isAuth = true;
			state.name = action.payload.user.name;
			state.email = action.payload.user.email;
			state.token = action.payload.result;
		},
		logout(state) {
			localStorage.removeItem('token');
			localStorage.removeItem('user');

			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
		},
	},
});

export default userSlice.reducer;
