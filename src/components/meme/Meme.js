import React from 'react';
import './style.css';

const Meme = ({source}) => {
    return (
        <div className="meme">
            <img src={source} alt="Generated meme" />
        </div>
    );
}

export default Meme;
