/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('Render App component', () => {
	it('Renders components', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.text()).toEqual('News Room App');
	});
});
