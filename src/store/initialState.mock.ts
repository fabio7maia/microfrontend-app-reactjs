import { baseInitialState } from './base';
import { StoreState } from './store';

export const initialStateMock: StoreState = {
	baseState: {
		...baseInitialState,
	},
};
