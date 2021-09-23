import React from 'react';
import { mount } from 'enzyme';
import { TestComponent, TestComponentProps } from '..';

const setup = (componentProps?: TestComponentProps): JSX.Element => {
	componentProps = componentProps ? componentProps : {};

	return <TestComponent {...componentProps} />;
};

describe('<TestComponent />', () => {
	it('component should be defined and render', () => {
		const wrapper = mount(setup(undefined));
		expect(wrapper).toBeDefined();
	});
});
