/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BBCHeadlines from '../Components/BBCHeadlines';

configure({ adapter: new Adapter() });

describe('<BBCHeadlines/>', () => {
	it('Render BBC Headliines', () => {
		const wrapper = shallow(<BBCHeadlines />);
		expect(wrapper.find('.card-header').text()).toEqual('Top BBC Headlines');
	});
});
