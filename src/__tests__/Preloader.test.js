/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PreLoader from '../Components/PreLoader';

configure({ adapter: new Adapter() });

describe('<PreLoader/>', () => {
	it('Render A Preloader', () => {
		const wrapper = shallow(<PreLoader />);
		expect(wrapper.exists('.spinner-border')).toEqual(true);
	});
});
