/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Components/Home';

configure({ adapter: new Adapter() });

describe('<Home/>', () => {
	it('Renders Home component ', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.exists('.container')).toEqual(true);
	});
});
