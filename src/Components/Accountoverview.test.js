import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Accountoverview from './Accountoverview';

//
configure({adapter: new Adapter()});

describe('<Accountoverview />', () => {

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<Accountoverview />);
  });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<Accountoverview></Accountoverview>,div)
})
/////
//button


});