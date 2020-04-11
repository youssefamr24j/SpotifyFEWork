import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditProfile from "./EditProfile";

//
configure({adapter: new Adapter()});

describe('<SignupForm />', () => {

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<EditProfile />);
  });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<EditProfile ></EditProfile>,div)
})
/////
it("Make update in details", async () => {
    const component = create (<EditProfile />);
    const instance = component.getInstance();
    await instance.saveEdit();
    console.log(instance.state) 
  });
//Buttons
it('cancel edits button renders ', () => {
    expect(wrapper.find('.buttonprem')).toHaveLength(1);
  });
  it('save edits button renders ', () => {
    expect(wrapper.find('.buttonprem2')).toHaveLength(1);
  });
  //Inputs
  //Must have password
  it('user must enter password with username OR Email OR age',()=>{
    expect(wrapper.find('input#pass')).toHaveLength(1) &&
    expect(wrapper.find('input#emailid')).toHaveLength(1)||
expect(wrapper.find('input#usernameid')).toHaveLength(1) ||
expect(wrapper.find('input#ageid')).toHaveLength(1);

  });
  









});