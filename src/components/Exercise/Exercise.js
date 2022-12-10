import React from 'react';
import './Exercise.css'

const Exercise = ({exercise, breaktime, notify}) => {
    return (
        <div className='mt-3'>
            <h5>Exercise Details</h5>
            <div className='d-flex justify-content-between align-items-center bgclass rounded px-3 pt-2 pb-0'>
                <p>Exercise time : </p> 
                <p>{exercise} Seconds</p>
            </div>
            <div className='d-flex justify-content-between align-items-center bgclass rounded px-3 pt-2 pb-0 mt-3'>
                <p>Break time : </p> 
                <p>{breaktime} Seconds</p>
            </div>
            <button onClick={notify} className='mt-3 rounded btn-sm btn-block taskbtn py-2 px-3 w-100 complete'>Activity Completed</button>
        </div>
    );
};

export default Exercise;