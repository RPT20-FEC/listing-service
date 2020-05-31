import React from 'react';
import { shallow, mount } from 'enzyme';
import Feature from '../client/src/components/Feature.jsx';

xdescribe('Feature Component', () => {

  it('renders', () => {
    const wrapper = shallow(<Feature />);
    expect(wrapper.exists()).toBe(true);
  });
});