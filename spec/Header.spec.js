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

  it('displays Superhost info when state includes superHost', () => {
    expect(wrapper.find('.test-file-stub')).toBeTruthy();

    expect(wrapper.containsMatchingElement(<div>Superhost</div>)).toBeTruthy();
  });

  it('does not display Superhost info when state does not include superHost', () => {
    wrapper.setState({superHost: false});

    expect(wrapper.find('.test-file-stub')).toEqual({});

    expect(wrapper.containsMatchingElement(<div>Superhost</div>)).toBeFalsy();

    wrapper.update();
  });

  it('displays star icon and number of stars and reviews from state', () => {
    expect(wrapper.find('.test-file-stub')).toBeTruthy();
    expect(wrapper.containsMatchingElement(
      <div>
        {stars} ({reviews})
      </div>
    )).toBeTruthy();
  });

  it('displays the location from state', () => {
    expect(wrapper.containsMatchingElement(
      <div>{location}</div>
    )).toBeTruthy();
  });

  it('displays a save button', () => {
    expect(wrapper.find('div.saveButton')).toBeTruthy();
    expect(wrapper.find('div.saveIcon')).toBeTruthy();
    expect(wrapper.containsMatchingElement(<div><img/>Save</div>)).toBeTruthy();
  });

  it('displays a share button', () => {
    expect(wrapper.find('div.shareButton')).toBeTruthy();
    expect(wrapper.find('div.shareIcon')).toBeTruthy();
    expect(wrapper.containsMatchingElement(<div><img/>Share</div>)).toBeTruthy();
  });

  // TODO: Implement all above ^^ , plus:
  // Learn how/why to mock png file for tests
  // Learn how to test async functions within class components

  // it 'includes' a thing the user sees
  // it includes the save and share icons and text
});
