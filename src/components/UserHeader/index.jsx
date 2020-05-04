import React from 'react';
import Waste_Logo from '../../images/waste_coin_logo.svg'
import './UserHeader.css';
import { Link } from 'react-router-dom';


function UserHeader() {
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <a className="navbar-brand" href="##"><Link to ="/"><img src={Waste_Logo} className="logo" alt="logo" /></Link></a>  
        </nav>
    )
}
export default UserHeader;

