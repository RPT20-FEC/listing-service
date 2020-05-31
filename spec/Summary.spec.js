import React from 'react';
import { shallow, mount } from 'enzyme';
import Summary from '../client/src/components/Summary.jsx';

describe('Summary Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Summary />);
    expect(wrapper.exists()).toBe(true);
  });
});
