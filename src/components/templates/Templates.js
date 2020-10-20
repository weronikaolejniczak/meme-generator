import React from 'react';

const Templates = ({templates, handleClick}) => {
    return (
        <div className="meme-container">
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

export default Templates;
