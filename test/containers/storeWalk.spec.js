import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import StoreWalk from '../../src/containers/storeWalk.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Store Walk container testing', () => {
  it('render div with class store walk', () => {
    const wrapper = shallow(<StoreWalk />);
    expect(wrapper.find('div.store-walk')).to.have.lengthOf(1);
  });
});
