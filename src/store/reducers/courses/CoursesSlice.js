import { createSlice } from '@reduxjs/toolkit';
import { fetchCourses } from '../../services';
import { removeCourse } from '../../services';

export const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {},
	extraReducers: {
		[fetchCourses.fulfilled.type]: (state, action) => {
			return action.payload;
		},
		[removeCourse.fulfilled.type]: (state, action) => {
			return state.filter((a) => a.id !== action.payload);
		},
	},
});

export default coursesSlice.reducer;
