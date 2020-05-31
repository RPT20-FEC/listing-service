import React from 'react';
import { shallow, mount } from 'enzyme';
import Description from '../client/src/components/Description.jsx';

xdescribe('Description Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists()).toBe(true);
  });
});
