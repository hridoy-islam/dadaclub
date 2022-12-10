import React from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import User from '../User/User';

const Profile = ({exercise, breaktime, addBreak, notify}) => {
    return (
        <div className='col-md-3 bg-white px-4 pt-4 pb-2'>
            
            <User></User>
            <Break breaktime={breaktime} addBreak={addBreak}></Break>
            <Exercise notify={notify} exercise={exercise} breaktime={breaktime}></Exercise>
        </div>
    );
};

export default Profile;