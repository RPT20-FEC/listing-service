import React from 'react';
import { shallow, mount } from 'enzyme';
import Room from '../client/src/components/Room.jsx';

describe('Room Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Room />);
    expect(wrapper.exists()).toBe(true);
  });
});
