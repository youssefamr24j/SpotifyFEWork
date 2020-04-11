import React from 'react';
import ReactDOM from 'react-dom';
import AlbumCard from './SongCard';

it("Song card renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<SongCard></SongCard>,div)
})
