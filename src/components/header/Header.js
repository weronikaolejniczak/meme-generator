import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1><span className="title-beginning">meme</span>generator</h1>
            </div>
            <div className="my-links">
                <ul>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
