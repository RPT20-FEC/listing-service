import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../client/src/components/Header.jsx';

describe('Header Component', () => {

  it('renders', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.exists()).toBe(true);
  });
});
