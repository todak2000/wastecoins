import React from 'react';
import Home from '../../images/home.svg';
import Profile from '../../images/profile.svg';
import Wallet from '../../images/wallet.svg';
import Notification from '../../images/notification.svg';
import Logout from '../../images/logout.svg';
import './userSidebar.css';
import { Link } from 'react-router-dom';


function UserSidebar() {
    return(
        <nav className="sidenav">
            <ul className="navbar-nav mr-auto sidenav-ul">
                <li className="nav-item sidenav-li">
                    <Link to ="/dashboard"><a className="nav-link" href="#how_it_works"><img src={Home} className="logo" alt="Home-logo" /><span className="sidenav-span">&nbsp;Home</span></a></Link>
                </li>
                <li className="nav-item sidenav-li">
                <Link to ="/registration"><a className="nav-link" href="##"><img src={Profile} className="logo" alt="Profile-logo" /> <span className="sidenav-span">Profile</span></a></Link>
                </li>
                <li className="nav-item sidenav-li">
                <Link to="/login"><a className="nav-link " href="##"><img src={Wallet} className="logo" alt="Wallet-logo" /><span className="sidenav-span">&nbsp;Wallet</span></a></Link>
                </li>
                <li className="nav-item sidenav-li">
                <Link to ="/registration"><a className="nav-link" href="##"><img src={Notification} className="logo" alt="Notification-logo" /> <span className="sidenav-span">Notification</span></a></Link>
                </li>
                <li className="nav-item sidenav-li">
                <Link to="/"><a className="nav-link " href="##"><img src={Logout} className="logo" alt="Logout-logo" /><span className="sidenav-span">&nbsp;Logout</span></a></Link>
                </li>
            </ul>
            <div className="sidenav-ul-mobile">
                <div className="menu-box">
                    <Link to ="/dashboard">
                        <img src={Home} className="logo" alt="Home-logo" />
                        <div className="sidenav-inner-div">&nbsp;Home</div>
                    </Link>
                </div>
                <div className="menu-box">
                    <Link to ="/dashboard">
                        <img src={Profile} className="logo" alt="Profile-logo" />
                        <div className="sidenav-inner-div">&nbsp;Profile</div>
                    </Link>
                </div>
            </div>

            {/* <ul className="navbar-nav mr-auto ">
                <li className="nav-item sidenav-li">
    
                </li> */}
                {/* <li className="nav-item sidenav-li">
                <Link to ="/registration"><a className="nav-link" href="##"><img src={Profile} className="logo" alt="Profile-logo" /> <span className="sidenav-span">Profile</span></a></Link>
                </li>
                <li className="nav-item sidenav-li">
                <Link to="/login"><a className="nav-link " href="##"><img src={Wallet} className="logo" alt="Wallet-logo" /><span className="sidenav-span">&nbsp;Wallet</span></a></Link>
                </li>
                <li className="nav-item sidenav-li">
                <Link to ="/registration"><a className="nav-link" href="##"><img src={Notification} className="logo" alt="Notification-logo" /> <span className="sidenav-span">Notification</span></a></Link>
                </li>
                <li className="nav-item sidenav-li">
                <Link to="/"><a className="nav-link " href="##"><img src={Logout} className="logo" alt="Logout-logo" /><span className="sidenav-span">&nbsp;Logout</span></a></Link>
                </li> */}
            {/* </ul> */}
        </nav>
    )
}
export default UserSidebar;

