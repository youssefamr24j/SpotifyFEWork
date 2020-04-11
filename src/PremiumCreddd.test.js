import React from 'react';
import ReactDOM from 'react-dom';
import Prem from './PremiumCreddd';
import PremiumCred from './PremiumCreddd';

it("Premium Credentials renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<PremiumCred></PremiumCred>,div)
})
