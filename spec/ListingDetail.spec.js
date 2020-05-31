import React from 'react';
import { shallow, mount } from 'enzyme';
import ListingDetail from '../client/src/components/ListingDetail.jsx';

describe('ListingDetail Component', () => {
  it('renders', () => {
    const wrapper = shallow(<ListingDetail />);
    expect(wrapper.exists()).toBe(true);
  });
});
