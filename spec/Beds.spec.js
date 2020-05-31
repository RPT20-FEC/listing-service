import React from 'react';
import { shallow, mount } from 'enzyme';
import Beds from '../client/src/components/Beds.jsx';

describe('Beds Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Beds />);
    expect(wrapper.exists()).toBe(true);
  });
});
