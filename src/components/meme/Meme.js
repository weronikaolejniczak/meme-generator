import React from 'react';

const Meme = ({source}) => {
    return (
        <div className="meme">
            <img src={source} alt="Generated meme" />
        </div>
    );
}

export default Meme;
