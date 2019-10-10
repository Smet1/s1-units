import React from 'react';
import App from './App';
import {sortTypes} from '../utils/sortOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', () => {
  // always orders (see mock.fakeOrders.js)
  const wrapper = shallow(<App/>);

  it('render with default state DATE', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('set state COUNT', () => {
    wrapper.find('select').simulate('change', {
      target: {value: sortTypes.COUNT}
    });

    expect(wrapper.state('sortType')).toEqual(sortTypes.COUNT);
  });

  it('set state DATE', () => {
    wrapper.find('select').simulate('change', {
      target: {value: sortTypes.DATE}
    });

    expect(wrapper.state('sortType')).toEqual(sortTypes.DATE);
  });

  it('set state ITEM_NAMES', () => {
    wrapper.find('select').simulate('change', {
      target: {value: sortTypes.ITEM_NAMES}
    });

    expect(wrapper.state('sortType')).toEqual(sortTypes.ITEM_NAMES);
  });

  it('set state KEK', () => {
    wrapper.find('select').simulate('change', {
      target: {value: sortTypes.undefined}
    });

    expect(wrapper.state('sortType')).toEqual(undefined);
  });
});
