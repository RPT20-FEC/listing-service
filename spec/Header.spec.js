import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../client/src/components/Header.jsx';
import { headline, stars, reviews, superHost, location } from './__mocks__/sampleData';

describe('Header Component', () => {
  const wrapper = mount(<Header id='1001'/>);
  wrapper.setState({
    listingId: wrapper.prop('id'),
    headline: headline,
    stars: stars,
    reviews: reviews,
    superHost: superHost,
    location: location
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('correctly displays a headline from state', () => {
    expect(wrapper.find('h1').text()).toEqual(`${headline}`);
  });
  // TODO: Implement all below, plus:
  // Learn how/why to mock png file for tests
  // Learn how to test async functions within class components

  // it 'includes' a thing the user sees
  // it includes the save and share icons and text
  // it includes the star icon

  // it displays this thing when given another thing
  // it includes headline x when this.state.headline is set to x
  // it includes the superhost badge when this.state.superHost
  // it shows # of stars when this.state.stars is set to #
  // it shows # of reviews when this.state.reviews is set to #
  // it includes location x when this.state.location is set to x
});
