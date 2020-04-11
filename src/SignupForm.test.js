import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignupForm from './SignupForm';
import { create } from 'react-test-renderer';
//
configure({adapter: new Adapter()});

describe('<SignupForm />', () => {

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<SignupForm />);
  });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<SignupForm></SignupForm>,div)
})

//onsubmit
it("Sends a Signup request", async () => {
  const component = create (<SignupForm />);
  const instance = component.getInstance();
  await instance.onsubmit();
  console.log(instance.state) 
});
//button
it('Signup button renders ', () => {
  expect(wrapper.find('.btn')).toHaveLength(1);
});
/*
//inputs if he entered all the inputs
it('Inputs render', () => {
  expect(wrapper.find('.forminput')).toHaveLength(7);
});
*/
// the inputs he must enter:
it('user must enter  username,email,password,age',()=>{
expect(wrapper.find('input#emailid')).toHaveLength(1);
expect(wrapper.find('input#usernameid')).toHaveLength(1);
expect(wrapper.find('input#passwordid')).toHaveLength(1);
expect(wrapper.find('input#ageid')).toHaveLength(1);
});
//go to login
it("go to signup", async () => {
  const component = create (<SignupForm />);
  const instance = component.getInstance();
  await instance.gologin();
  console.log(instance.state) 
});
/*
const { onChangeemail } = require('./SignupForm');

test('should be ready and signedup',()=>{
  onChangeemail("areejkhalid03@gmail.com");
  const text = emailError;
  expect(text).toBe("");

})
/*


// act 
SignupForm ob1= new SignupForm(m,g,r,w,t,6,w,"",676757);
//arrange
string x = signupform(uyiuy\]
    asserttrue(string x)
     */

  });