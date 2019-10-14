import { shallow, configure } from 'enzyme';
import React from 'react';

import { fakeOrders } from '../mock/fakeOrders';
import Order from './Order';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Order component', () => {
	it('render first element', () => {
		const wrapper = shallow(<Order order={fakeOrders[0]} />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('render second element', () => {
		const wrapperSecond = shallow(<Order order={fakeOrders[1]} />);

		expect(toJson(wrapperSecond)).toMatchSnapshot();
	});

	it('render empty element', () => {
		const wrapperNotValid = shallow(<Order order={{}} />);

		expect(toJson(wrapperNotValid)).toMatchSnapshot();
	});

	it('render empty element not equal first element', () => {
		const wrapperNotValid = shallow(<Order order={{}} />);
		const wrapper = shallow(<Order order={fakeOrders[0]} />);

		expect(toJson(wrapperNotValid)).not.toEqual(toJson(wrapper));
	});

	it('render new element', () => {
		const wrapperNewElement = shallow(<Order order={{
			id: -1,
			date: 1544356800001,
			shop: 'kek Express',
			items: [
				'kek'
			]
		}} />);

		expect(toJson(wrapperNewElement)).toMatchSnapshot();
	});
})