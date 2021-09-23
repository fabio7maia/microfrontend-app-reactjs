import React from 'react';
import { mount } from 'enzyme';
import { UnexpectedError } from '..';

const setup = (componentProps?: any): JSX.Element => {
	componentProps = componentProps ? componentProps : {};

	return <UnexpectedError {...componentProps} />;
};

describe('<UnexpectedError />', () => {
	it('component should be defined and render', () => {
		const wrapper = mount(setup());

		expect(wrapper).toBeDefined();
	});
});
