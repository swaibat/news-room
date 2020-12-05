/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopUsHeadlines from '../Components/TopUsHeadlines';

configure({ adapter: new Adapter() });

describe('<TopUsHeadlines/>', () => {
	it('Renders Top Us Headlines', () => {
		const wrapper = shallow(<TopUsHeadlines />);
		expect(wrapper.find('.card-header').text()).toEqual('Top Headlines');
	});
});
