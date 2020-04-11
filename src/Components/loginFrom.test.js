import React from 'react';
import ReactDOM from 'react-dom';
import Loginform from './loginForm';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { create } from 'react-test-renderer';

configure({adapter: new Adapter()});
describe('<Loginform />', () => {

    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<Loginform />);
    });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<Loginform></Loginform>,div)
});


it('should have input for email and password', ()=> {
    //Email and password input field should be present
    expect(wrapper.find('input#email')).toHaveLength(1);
    expect(wrapper.find('input#password')).toHaveLength(1);
});


it('Login button renders ', () => {
    //should have a btn component
    expect(wrapper.find('.btn')).toHaveLength(1);
  });

  it('signup button renders ', () => {
    //should have a btn component
    expect(wrapper.find('.btn3')).toHaveLength(1);
  });


it("Sends a login request", async () => {
    const component = create(<Loginform />);
    const instance = component.getInstance();
    await instance.isValid();
    console.log(instance.state) 
  });

 
});