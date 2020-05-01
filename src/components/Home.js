import React from 'react';
import Waste_Logo from '../constants/wastecoin_logo.png';
import { Link } from 'react-router-dom';
function Home() {
    return(
        <div>
            <div className="desktop">
                <div className="row top_home"> 
                    <div className="col-md-5 left"></div>
                    <div className="col-md-7 right"></div>
                </div>
            </div>
            <div className="mobile">
                <div className="splashscreen">
                    <img src={Waste_Logo} className="logo" alt="logo" />
                    <div className="splash-words">
                        <h4>Hey there!</h4> 
                        <h6>Get rewards for disposing waste</h6>
                        <h6> properly</h6>
                        <br></br>
                        <br></br>
                        <h5>Join us. It's free</h5>
                    </div>
                    <button type="submit" className="reg-submit" >Sign in</button>
                    <Link to ="/registration"><p>Create an account</p></Link>
                </div>
            </div>
        </div>
      
    )
}
export default Home;


