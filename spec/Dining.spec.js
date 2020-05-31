import React from 'react';
import { shallow, mount } from 'enzyme';
import Dining from '../client/src/components/Dining.jsx';

describe('Dining Component', () => {

  it('renders', () => {
    const wrapper = shallow(<Dining />);
    expect(wrapper.exists()).toBe(true);
  });
});