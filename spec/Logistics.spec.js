import React from 'react';
import { shallow, mount } from 'enzyme';
import Logistics from '../client/src/components/Logistics.jsx';

describe('Logistics Component', () => {

  it('renders', () => {
    const wrapper = shallow(<Logistics />);
    expect(wrapper.exists()).toBe(true);
  });
});