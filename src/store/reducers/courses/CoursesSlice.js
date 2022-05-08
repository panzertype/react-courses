import { createSlice } from '@reduxjs/toolkit';

export const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		setCourses(state, action) {
			return action.payload;
		},
		addCourse(state, action) {
			state.push(action.payload);
		},
		editCourse(state, action) {
			return state.map((a) =>
				a.id === action.payload.id ? action.payload.result : a
			);
		},
		removeCourse(state, action) {
			return state.filter((a) => a.id !== action.payload);
		},
	},
});

export default coursesSlice.reducer;
