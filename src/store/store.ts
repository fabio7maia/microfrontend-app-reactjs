import { Action, combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { baseReducer, BaseState } from './base';

export interface StoreState {
	baseState: BaseState;
}

interface StoreReducer {
	baseState: any;
}

const appReducer = (history: History): Reducer<StoreReducer> => {
	return combineReducers({
		baseState: baseReducer,
	});
};

export const rootReducer = (history: History): Reducer<StoreReducer> => {
	return (state: any, action: Action): any => {
		const newState = { ...state };

		return appReducer(history)(newState, action);
	};
};
