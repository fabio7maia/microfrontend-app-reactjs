import { BaseActionTypes, baseInitialState, baseReducer } from '..';

describe('<baseReducer />', () => {
	it('should works', () => {
		const res = baseReducer(baseInitialState, {
			type: BaseActionTypes.changeLanguage,
			payload: 'en',
		});

		expect(res).toBeDefined();
		expect(res.language).toEqual('en');
	});
});
