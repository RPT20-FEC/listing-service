import React from 'react';
import { shallow, mount } from 'enzyme';
import Facilities from '../client/src/components/Facilities.jsx';

describe('Facilities Component', () => {

  it('renders', () => {
    const wrapper = shallow(<Facilities />);
    expect(wrapper.exists()).toBe(true);
  });
});