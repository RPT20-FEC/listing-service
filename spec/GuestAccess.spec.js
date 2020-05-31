import React from 'react';
import { shallow, mount } from 'enzyme';
import GuestAccess from '../client/src/components/GuestAccess.jsx';

describe('GuestAccess Component', () => {

  it('renders', () => {
    const wrapper = shallow(<GuestAccess />);
    expect(wrapper.exists()).toBe(true);
  });
});