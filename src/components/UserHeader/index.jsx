import React from 'react';
import Waste_Logo from '../../images/waste_coin_logo.svg'
import './userHeader.css';
import { Link } from 'react-router-dom';


function UserHeader() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg appheader">
            <a className="navbar-brand" href="##"><Link to ="/"><img src={Waste_Logo} className="logo" alt="logo" /></Link></a>  
            </nav>
            <div className="dashboard-header text-center">Dashboard</div>
        </div>
    )
}
export default UserHeader;

