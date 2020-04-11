import React from 'react';
import AlbumCard from './AlbumCard';

/**Returns AlbumCard component for every element in the array, forming a list of album cards.*/
const AlbumList = ({ albums }) => {
  return (
    <div>
      {
        albums.map((user, i) => {
          return (
            <AlbumCard
              key={i}
              id={albums[i].id}
              name={albums[i].name}
              
              />
          );
        })
      }
    </div>
  );
}

export default AlbumList;