import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1><FontAwesomeIcon icon={faMartiniGlassCitrus } />Dada Club</h1>
            <p>Select today’s Practise</p>
        </div>
    );
};

export default Header;