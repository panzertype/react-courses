import { createSlice } from '@reduxjs/toolkit';

export const authorsSlice = createSlice({
	name: 'authors',
	initialState: [],
	reducers: {
		setAuthors(state, action) {
			return action.payload;
		},
		addAuthor(state, action) {
			state.push(action.payload);
		},
	},
});

export default authorsSlice.reducer;
