/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotArticles from '../Components/NotArticles';

configure({ adapter: new Adapter() });

describe('<NotArticles/>', () => {
	it('Renders not found component ', () => {
		const wrapper = shallow(<NotArticles />);
		expect(wrapper.find('h3').text()).toEqual('No Articles Found');
	});
});
