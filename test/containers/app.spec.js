import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/containers/app.js';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });


describe('App container testing', () => {
  it('renders welcome message', () =>  {
    const wrapper = shallow(<App />); 
    expect(wrapper.find('div.app')).to.have.lengthOf(1);
  });
});