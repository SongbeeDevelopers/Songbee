import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// This function will display the user's song details with a player so they can review 
// their song

function UserDetails() {
    const dispatch = useDispatch();
    const ID = useParams();

    return (
        <div className='audioPlayer'>
           <audio controls src="https://res.cloudinary.com/dcram3k0q1/video/upload/v1705711050/syquoqbokasssbuem1sf.wav"></audio>  

        </div>
    )


}

export default UserDetails;