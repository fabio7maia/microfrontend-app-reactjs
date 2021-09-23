import { createHashHistory } from 'history';
import configureStore from '../configureStore';

const history = createHashHistory();

describe('configureStore', () => {
	it('should works', () => {
		const store = configureStore(history);

		expect(store).toBeDefined();
	});
});
