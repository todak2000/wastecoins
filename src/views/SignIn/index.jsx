import React from 'react';

import './signin.css';

function SignIn() {
    return (
        <div className="sign_in d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
                <p className="d-none d-sm-block signin__title_bar text-center">Sign into your account</p>
                <div className="col-xs-12 col-sm-8 col-lg-6 input_field">
                    <input type="text" placeholder="Phone Number" className="form-control" />
                    <input type="password" placeholder="Password" className="form-control mt-3" />
                    <button className="btn btn-block btn-primary mt-5">Login</button>
                    <div className="d-flex justify-content-between mt-3 sign_in__info">
                        <a href="##">Create Account</a>
                        <a href="##">Forget passowrd?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;

