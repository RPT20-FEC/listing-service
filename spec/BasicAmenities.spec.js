import React from 'react';
import { shallow, mount } from 'enzyme';
import BasicAmenities from '../client/src/components/BasicAmenities.jsx';

describe('BasicAmenities Component', () => {

  it('renders', () => {
    const wrapper = shallow(<BasicAmenities />);
    expect(wrapper.exists()).toBe(true);
  });
});