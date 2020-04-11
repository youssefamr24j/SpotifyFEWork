import React from 'react';
import ReactDOM from 'react-dom';
import HomeContent from './HomeContent';



it("Home content renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<HomeContent></HomeContent>, div);
});