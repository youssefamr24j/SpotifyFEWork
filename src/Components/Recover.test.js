import React from 'react';
import ReactDOM from 'react-dom';
import Recoverplaylist from './Recover';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//import { create } from 'react-test-renderer';




configure({adapter: new Adapter()});
describe('<Recoverplaylist />', () => {

    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<Recoverplaylist />);
    });
///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<Recoverplaylist></Recoverplaylist>,div)
});

it('Restore button renders ', () => {
    //should have a btn component
    expect(wrapper.find('.restor')).toHaveLength(1);
  });

  it('Table renders ', () => {
    //should have a table component of id #deletedLists
    expect(wrapper.find('#deletedLists')).toHaveLength(1);
  });

})
