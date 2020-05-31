import React from 'react';
import { shallow, mount } from 'enzyme';
import FamilyFeatures from '../client/src/components/FamilyFeatures.jsx';

describe('FamilyFeatures Component', () => {

  it('renders', () => {
    const wrapper = shallow(<FamilyFeatures />);
    expect(wrapper.exists()).toBe(true);
  });
});