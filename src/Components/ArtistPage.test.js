import React from 'react';
import ReactDOM from 'react-dom';
import ArtistPage from './ArtistPage';

it("Artist page renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<ArtistPage></ArtistPage>,div)
})
