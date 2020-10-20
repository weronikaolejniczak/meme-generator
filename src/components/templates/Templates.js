import React from 'react';
import {Gallery} from '../';
import './style.css';

const Templates = ({templates, selectedId, handleClick}) => {
    return (
        <div className="templates">
            <h3>Pick a template</h3>

            <Gallery
                templates={templates}
                handleClick={handleClick}
            />
      </div>
    );
}

export default Templates;
