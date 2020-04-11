import React from 'react';
import ArtistCard from './ArtistCard';

/**
 * it takes an array or object that has id ,name,photo and type to send them to Artistcard class which visulaize each one of them
 * we use this function to create many cards and header for them
 */


const Arab = ({Artists}) =>{
    const cardComponents=Artists.map(user => {
        return <ArtistCard key={user.id}  name={user.name} photo={user.photo} type={user.type} />
    })
    return(
        <div >
            <h1 className='Head'>Arab</h1>
            {cardComponents}
        </div> 
    );
}


export default Arab;
