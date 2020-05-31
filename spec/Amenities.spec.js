import React from 'react';
import { shallow, mount } from 'enzyme';
import Amenities from '../client/src/components/Amenities.jsx';

describe('Amenities Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Amenities />);
    expect(wrapper.exists()).toBe(true);
  });
});
