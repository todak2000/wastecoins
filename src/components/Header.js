import React from 'react';
import Waste_Logo from '../constants/wastecoin_logo.png'
import Apple_Logo from '../constants/applestore.png'
import Google_Logo from '../constants/googlestore.png'
import { Link } from 'react-router-dom';
function Header() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><Link to ="/"><img src={Waste_Logo} className="logo" alt="logo" /></Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to ="/"><a className="nav-link" href="#">How it works</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to ="/registration"><a className="nav-link" href="#">Register</a></Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " href="#">Login</a>
                    </li>
                </ul>
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><img src={Google_Logo} className="logo" alt="logo" /> <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src={Apple_Logo} className="logo" alt="logo" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;


