import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authorsReducer from './reducers/authors/AuthorsSlice';
import coursesReducer from './reducers/courses/CoursesSlice';
import userReducer from './reducers/user/UserSlice';
import noEffectReducer from './reducers/custom/noEffectSlice';

const rootReducer = combineReducers({
	authorsReducer,
	coursesReducer,
	userReducer,
	noEffectReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
