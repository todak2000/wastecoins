import React from 'react';
import { Link } from 'react-router-dom';

import Waste_Logo from '../../images/waste_coin_logo.svg';
import Back_Button from '../../images/Chevron.svg';
import './verification.css';

function VerificationPage() {
    return (
        <div className="login-card">
            {/* <p className="d-none d-sm-block signin__title_bar text-center">Sign into your account</p> */}
            <div className="reg-header text-center"> <Link to="/"><img src={Back_Button} className="back-button mobile-logo float-left" alt="logo" /></Link>Verify Account</div>
            <div className="mobile-logo-div mb-5"><img src={Waste_Logo} className="logo mobile-logo" alt="logo" /></div>

            <form className="form-control reg-form btn_width">
                <div className="verify-header">Enter Verification Code here</div>
                <div className="form-group">
                    <input type="text" placeholder=" * * * * * *" className="form-control-login" />
                </div>
                <button className="btn btn-block btn-primary mt-5 login_btn">Verify Code</button>
                <div className="d-flex justify-content-center mt-3 sign_in__info">
                    <a href="##">Resend Code</a>
                </div>
            </form>
        </div>
    );
}

export default VerificationPage;

