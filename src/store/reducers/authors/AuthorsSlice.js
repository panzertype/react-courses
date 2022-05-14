import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthors } from '../../services';
import { addAuthor } from '../../services';

export const authorsSlice = createSlice({
	name: 'authors',
	initialState: [],
	reducers: {},
	extraReducers: {
		[fetchAuthors.fulfilled.type]: (state, action) => {
			return action.payload;
		},
		[addAuthor.fulfilled.type]: (state, action) => {
			state.push(action.payload);
		},
	},
});

export default authorsSlice.reducer;
