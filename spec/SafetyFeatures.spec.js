import React from 'react';
import { shallow, mount } from 'enzyme';
import SafetyFeatures from '../client/src/components/SafetyFeatures.jsx';

describe('SafetyFeatures Component', () => {

  it('renders', () => {
    const wrapper = shallow(<SafetyFeatures />);
    expect(wrapper.exists()).toBe(true);
  });
});