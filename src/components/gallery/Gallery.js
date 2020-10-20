import React from 'react';
import './style.css';

const Gallery = ({templates, handleClick}) => {
    return (
        <div className="gallery">
            {templates.map((elem) => (
                <img
                    key={elem.id}
                    onClick={() => handleClick(elem.id)}
                    src={elem.url}
                    alt={elem.name}
                />
            ))}
        </div>
    );
}

export default Gallery;
