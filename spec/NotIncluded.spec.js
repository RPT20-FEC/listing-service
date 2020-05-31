import React from 'react';
import { shallow, mount } from 'enzyme';
import NotIncluded from '../client/src/components/NotIncluded.jsx';

describe('NotIncluded Component', () => {

  it('renders', () => {
    const wrapper = shallow(<NotIncluded />);
    expect(wrapper.exists()).toBe(true);
  });
});