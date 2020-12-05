/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BBCArticle from '../Components/BBCArticle';
import Data from '../__mock__/data';

jest.mock('axios');

configure({ adapter: new Adapter() });

const renderCard = (news) => {
	return shallow(<BBCArticle news={news} />);
};

describe('should test user role card component', () => {
	it('Should render', () => {
		const wrapper = renderCard(Data);
		expect(wrapper.find('li').length).toEqual(1);
	});
});
