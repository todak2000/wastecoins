import React from 'react';
import WasteCoinLogo from '../../images/waste_coin_logo.svg';
import PlayStpreLogo from '../../images/googlestore.svg';
import AppleStoreLogo from '../../images/applestore.svg';

import './header.css';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header_layout">
        <nav className="header_layout__nav">
            <div className="header_layout__logo">
                <img src={WasteCoinLogo} alt="waste_coin_logo" />
            </div>
            <div className="d-none d-sm-block header_layout__links">
                <ul>
                    <li>How it works</li>
                    <li>Register</li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div className="spacer" />
            <div className="header_layout__google_play_link">
            <img src={PlayStpreLogo} alt="waste_coin_logo" />
            </div>
            <div className="header_layout__apple_store_link">
            <img src={AppleStoreLogo} alt="waste_coin_logo" />
            </div>
        </nav>
    </header>
);

export default Header;
