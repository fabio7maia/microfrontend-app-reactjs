import { BaseActionTypes, BaseState } from './base.types';
import { AnyAction } from 'redux';

export const baseInitialState: BaseState = {
	language: 'pt',
};

export const baseReducer: (state: BaseState | undefined, action: AnyAction) => BaseState = (
	state = baseInitialState,
	action
): BaseState => {
	if (action.type === BaseActionTypes.changeLanguage) {
		const language = action.payload;

		return {
			...state,
			language,
		};
	}

	return state;
};
