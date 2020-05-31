import React from 'react';
import { shallow, mount } from 'enzyme';
import Outdoor from '../client/src/components/Outdoor.jsx';

describe('Outdoor Component', () => {

  it('renders', () => {
    const wrapper = shallow(<Outdoor />);
    expect(wrapper.exists()).toBe(true);
  });
});