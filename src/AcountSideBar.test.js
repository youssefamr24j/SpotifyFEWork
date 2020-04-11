import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import AcountSideBar from './AcountSideBar';


///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<AcountSideBar></AcountSideBar>,div)
})
/////
