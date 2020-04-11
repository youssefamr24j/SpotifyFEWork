import React from 'react';
import ReactDOM from 'react-dom';
import Playbutton from './PlayButton';



it("Play button button renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<Playbutton></Playbutton>, div);
});