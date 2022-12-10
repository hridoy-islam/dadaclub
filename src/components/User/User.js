import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './User.css'

const User = () => {
    return (
        <div>
            <div className='d-flex gap-3'>
                <div>
                    <img className='rounded avatar' src="https://avatars.githubusercontent.com/u/7904326?v=4" alt='' />
                </div>

                <div><h4>Ridoy Islam</h4>
                    <p><FontAwesomeIcon icon={faLocationPin} /> Dhaka, Bangladesh</p></div>
            </div>
            <div className='d-flex bgclass rounded px-3 pt-3 pb-0 justify-content-between align-items-center'>
                <div>
                    <h5>75kg</h5>
                    <p>Weight</p>
                </div>
                <div>
                    <h5>5.4</h5>
                    <p>Height</p>

                </div>
                <div>
                    <h5>25yrs</h5>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default User;