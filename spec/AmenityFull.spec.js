import React from 'react';
import { shallow, mount } from 'enzyme';
import AmenityFull from '../client/src/components/AmenityFull.jsx';

xdescribe('AmenityFull Component', () => {

  it('renders', () => {
    const wrapper = shallow(<AmenityFull/>);
    expect(wrapper.exists()).toBe(true);
  });
});
