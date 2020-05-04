import React from 'react';
import Waste_Logo from '../../images/waste_coin_logo.svg';
import './userSidebar.css';
import { Link } from 'react-router-dom';


function UserSidebar() {
    return(
        <nav className="sidenav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to ="/dashboard"><a className="nav-link" href="#how_it_works">Home</a></Link>
                </li>
                <li className="nav-item">
                <Link to ="/registration"><a className="nav-link" href="##">Profile</a></Link>
                </li>
                <li className="nav-item">
                <Link to="/login"><a className="nav-link " href="##">Wallet</a></Link>
                </li>
                <li className="nav-item">
                <Link to ="/registration"><a className="nav-link" href="##">Notification</a></Link>
                </li>
                <li className="nav-item">
                <Link to="/login"><a className="nav-link " href="##">Logout</a></Link>
                </li>
            </ul>
            
        </nav>
    )
}
export default UserSidebar;

