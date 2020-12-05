/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopUsArticle from '../Components/TopUsArticle';
import Data from '../__mock__/data';

jest.mock('axios');

configure({ adapter: new Adapter() });

describe('<TopUsArticle/>', () => {
	it('Reander Top Article', () => {
		const wrapper = shallow(<TopUsArticle news={Data} />);
		expect(wrapper.find('.headline-img-holder').length).toEqual(1);
	});
});
