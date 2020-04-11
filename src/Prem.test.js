import React from 'react';
import ReactDOM from 'react-dom';
import Prem from './Prem';

it("Prem renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Prem></Prem>,div)
})
