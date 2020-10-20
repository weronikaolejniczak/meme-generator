import React from 'react';
import {Gallery} from '../';
import './style.css';

const Templates = ({templates, selectedId, handleClick}) => {
    return (
        <div className="templates">
            <h2>Pick a template</h2>
            <strong>Selected meme template:</strong> {selectedId}

            <Gallery
                templates={templates}
                handleClick={handleClick}
            />
      </div>
    );
}

export default Templates;
