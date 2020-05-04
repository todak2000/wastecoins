import React from 'react';
import Waste_Logo from '../../images/waste_coin_logo.svg';
import './userSidebar.css';
import { Link } from 'react-router-dom';


function UserSidebar() {
    return(
        <nav className="sidenav">
            <a className="navbar-brand" href="##"><Link to ="/"><img src={Waste_Logo} className="logo" alt="logo" /></Link></a>
            
        </nav>
    )
}
export default UserSidebar;

