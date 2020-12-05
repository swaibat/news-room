/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Components/Header';

configure({ adapter: new Adapter() });

describe('<Header/>', () => {
	it('Renders Header components', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('.navbar-brand').text()).toEqual('News Room');
	});
});
