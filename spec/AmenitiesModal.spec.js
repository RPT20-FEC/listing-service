import React from 'react';
import { shallow, mount } from 'enzyme';
import AmenitiesModal from '../client/src/components/AmenitiesModal.jsx';

//TODO: how to mount class components and pass props etc.

xdescribe('AmenitiesModal Component', () => {
  it('renders', () => {
    const wrapper = shallow(<AmenitiesModal />);
    expect(wrapper.exists()).toBe(true);
  });
});
