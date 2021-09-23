import configureStore from '../configureStore';

describe('configureStore', () => {
	it('should works', () => {
		const store = configureStore();

		expect(store).toBeDefined();
	});
});
