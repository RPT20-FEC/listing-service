import React from 'react';
import { shallow, mount } from 'enzyme';
import BedAndBath from '../client/src/components/BedAndBath.jsx';

describe('BedAndBath Component', () => {

  it('renders', () => {
    const wrapper = shallow(<BedAndBath />);
    expect(wrapper.exists()).toBe(true);
  });
});