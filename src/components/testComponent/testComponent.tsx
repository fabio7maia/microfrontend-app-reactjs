import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { initialStateMock } from '@store';

export interface TestComponentProps {
	state?: Record<string, any>;
}

export const TestComponent: React.FC<TestComponentProps> = ({ children, state = {} }) => {
	const mockStore = configureStore();
	const store = mockStore({
		...initialStateMock,
		...state,
	});

	return (
		<Provider store={store}>
			<HashRouter>
				<Route render={(): React.ReactNode => <>{children}</>} />
			</HashRouter>
		</Provider>
	);
};
