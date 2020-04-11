import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Accountoverview from './Accountoverview';


///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<Accountoverview></Accountoverview>,div)
})
/////
