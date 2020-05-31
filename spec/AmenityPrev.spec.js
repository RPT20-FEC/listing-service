import React from 'react';
import { shallow, mount } from 'enzyme';
import AmenityPrev from '../client/src/components/AmenityPrev.jsx';

xdescribe('AmenityPrev Component', () => {

  it('renders', () => {
    const wrapper = shallow(<AmenityPrev />);
    expect(wrapper.exists()).toBe(true);
  });
});