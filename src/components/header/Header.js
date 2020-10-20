import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <h1>Hello</h1>
            </div>
            <nav className="header__menu">
                <ul>
                    <li>Hello</li>
                    <li>World</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
