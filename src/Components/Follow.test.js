import React from 'react';
import ReactDOM from 'react-dom';
import Follow from './Follow';



it("Follow button renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<Follow></Follow>, div);
});