import React from 'react';
import ReactDOM from 'react-dom';
import AlbumCard from './AlbumCard';

it("Album card renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<AlbumCard></AlbumCard>,div)
})
