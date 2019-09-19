import React from 'react';

import renderer from 'react-test-renderer';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Form from '../components/Form';

Enzyme.configure({ adapter: new Adapter() });
 

describe('< Form />', () => {
  it('Is rendered when app starts', () => {
    const app = shallow(<Form />);

    expect(app.find('input').exists()).toEqual(true);
    expect(app.find('button').exists()).toEqual(true);

    expect(app.find('input').text()).toEqual('');
  });

  it('name should change when key is pressed', () => {
    const app = mount(< Form />);
    const input = app.find('input');

    input.simulate('key-pressed');

    expect(app.state().name).toEqual(!'');
    
  });
    
  it('count should be toggled when the form is submiitted ', () => {
    const app = mount(< Form />);
    const button = app.find('button');

    button.simulate('submit');

    expect(app.state().count).toEqual(!0);
   
  });
    
  it('matches snapshot', () => {
    const snapshot = renderer.create(< Form />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  
});
