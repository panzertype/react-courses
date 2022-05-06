import { createSlice } from '@reduxjs/toolkit';

export const noEffectSlice = createSlice({
	name: 'noEffect',
	initialState: {
		courses: false,
		authors: false,
	},
	reducers: {
		toggleCoursesState(state) {
			state.courses = !state.courses;
		},
		toggleAuthorsState(state) {
			state.authors = !state.authors;
		},
	},
});

export default noEffectSlice.reducer;
