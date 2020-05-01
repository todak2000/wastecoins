import React, {useState} from 'react';
import Waste_Logo from '../constants/wastecoin_logo.png';
import Back_Button from '../constants/back_button.png';
import { Link } from 'react-router-dom';
function RegistrationPage(props) {
  return(
      <div className="login-card">
          <div className="reg-header text-center"> <Link to ="/"><img src={Back_Button} className="back-button mobile-logo float-left" alt="logo" /></Link>Register</div>
          <div className="mobile-logo-div"><img src={Waste_Logo} className="logo mobile-logo" alt="logo" /></div>
          <form className="form-control reg-form">
          <div className="row">
              <div className="col-md-6">
                 <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="firstName" 
                        placeholder="First Name"
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="lastName" 
                        placeholder="Last Name"
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="phone" 
                        className="form-control-login" 
                        id="phone" 
                        placeholder="Phone Number"
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="email" 
                        className="form-control-login" 
                        id="email" 
                        placeholder="Email"
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="password" 
                        className="form-control-login" 
                        id="password" 
                        placeholder="Password"
                    />
                  </div>
              </div>

              <div className="col-md-6 next-mobile">
                  <div className="form-group text-left">
                    <input type="password" 
                        className="form-control-login" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="address" 
                        placeholder="Street Address"
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="lga" 
                        placeholder="L.G.A"
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="sstate" 
                        placeholder="State"
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="country" 
                        placeholder="Country"
                    />
                  </div>
              </div>
              
            </div>
            <div className="col-md-12 submit-reg-div">
                <button type="submit" className="reg-submit" >Create Account</button>
                <Link to ="/registration"><p>Have an account already? Sign in </p></Link>
            </div>
          </form>
      </div>
        //     <form>
                // <div className="form-group text-left">
                // <label htmlFor="exampleInputEmail1">Email address</label>
                // <input type="email" 
                //        className="form-control" 
                //        id="email" 
                //        aria-describedby="emailHelp" 
                //        placeholder="Enter email"
                // />
                // <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                // </div>
        //         <div className="form-group text-left">
        //             <label htmlFor="exampleInputPassword1">Password</label>
        //             <input type="password" 
        //                 className="form-control" 
        //                 id="password" 
        //                 placeholder="Password"
        //             />
        //         </div>
        //         <div className="form-group text-left">
        //             <label htmlFor="exampleInputPassword1">Confirm Password</label>
        //             <input type="password" 
        //                 className="form-control" 
        //                 id="confirmPassword" 
        //                 placeholder="Confirm Password"
        //             />
        //         </div>
        //         <button 
        //             type="submit" 
        //             className="btn btn-primary"
        //         >
        //             Register
        //         </button>
        //     </form>
        // </div>
    )
}
export default RegistrationPage;