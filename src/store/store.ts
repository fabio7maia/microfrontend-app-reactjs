import { Action, combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { baseReducer, BaseState } from './base';

export interface StoreState {
	baseState: BaseState;
}

interface StoreReducer {
	baseState: any;
}

const appReducer = (): Reducer<StoreReducer> => {
	return combineReducers({
		baseState: baseReducer,
	});
};

export const rootReducer = (): Reducer<StoreReducer> => {
	return (state: any, action: Action): any => {
		const newState = { ...state };

		return appReducer()(newState, action);
	};
};
