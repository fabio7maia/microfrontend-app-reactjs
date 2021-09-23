import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { App } from '../app';
import { TestComponent } from '@components';

const setup = (): JSX.Element => {
	return (
		<TestComponent>
			<App />
		</TestComponent>
	);
};

describe('<App />', () => {
	it('component should be defined and render', () => {
		const historyMock = createMemoryHistory();

		const wrapper = mount(<Router history={historyMock}>{setup()}</Router>);
		const base = wrapper.find('FlowManager');
		expect(base).toBeDefined();
	});
});
