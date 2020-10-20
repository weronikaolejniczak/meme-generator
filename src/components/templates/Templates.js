import React from 'react';
import './style.css';

const Templates = ({templates, handleClick}) => {
    return (
        <div className="templates">
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
