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
		removeCourse(state, action) {
			return state.filter(
				(a) => JSON.stringify(a) !== JSON.stringify(action.payload)
			);
		},
	},
});

export default coursesSlice.reducer;
