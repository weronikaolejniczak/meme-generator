import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content">
                <span className="page-author">Made by <a href="https://github.com/weronikaolejniczak">Weronika Olejniczak</a></span>
                <div className="useful-links">
                    <li>
                        <a href="https://imgflip.com/api">FlipIMG API</a>
                    </li>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
