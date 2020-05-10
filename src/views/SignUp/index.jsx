import React, {Component} from 'react';
import Waste_Logo from '../../images/waste_coin_logo.svg';
import Back_Button from '../../images/Chevron.svg';
import { Link } from 'react-router-dom';

class RegistrationPage extends Component{
  state = {
    credentials:{
      firstname: '',
      lastname: '',
      phonenumber: '',
      email: '',
      password: '',
      confirmpassword: '',
      address:'',
      lga: '',
      state:'',
      country:''
    }
  }
  register = event =>{
    console.log(this.state.credentials);
    fetch('https://wastecoin.herokuapp.com/api/v1/signup', {
      method:'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(this.state.credentials)
    }).then(
      data =>{
        console.log(data);
      }
    ).catch(error =>console.error(error));
    
  }
  inputChanged= event =>{
    const cred = this.state.credentials;
    cred[event.target.id] = event.target.value;
    this.setState({credentials: cred})
  }
  render(){
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
                        id="firstname" 
                        placeholder="First Name"
                        value={this.state.credentials.firstname}
                        onChange={this.inputChanged}
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="lastname" 
                        placeholder="Last Name"
                        value={this.state.credentials.lastname}
                        onChange={this.inputChanged}
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="phone" 
                        className="form-control-login" 
                        id="phone" 
                        placeholder="Phone Number"
                        value={this.state.credentials.phone}
                        onChange={this.inputChanged}
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="email" 
                        className="form-control-login" 
                        id="email" 
                        placeholder="Email"
                        value={this.state.credentials.email}
                        onChange={this.inputChanged}
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="password" 
                        className="form-control-login" 
                        id="password" 
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.inputChanged}
                    />
                  </div>
              </div>

              <div className="col-md-6 next-mobile">
                  <div className="form-group text-left">
                    <input type="password" 
                        className="form-control-login" 
                        id="confirmpassword" 
                        placeholder="Confirm Password"
                        value={this.state.credentials.confirmpassword}
                        onChange={this.inputChanged}
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="address" 
                        placeholder="Street Address"
                        value={this.state.credentials.address}
                        onChange={this.inputChanged}
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="lga" 
                        placeholder="L.G.A"
                        value={this.state.credentials.lga}
                        onChange={this.inputChanged}
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="state" 
                        placeholder="State"
                        value={this.state.credentials.state}
                        onChange={this.inputChanged}
                    />
                  </div>

                  <div className="form-group text-left">
                    <input type="text" 
                        className="form-control-login" 
                        id="country" 
                        placeholder="Country"
                        value={this.state.credentials.country}
                        onChange={this.inputChanged}
                    />
                  </div>
              </div>
              
            </div>
            <div className="col-md-12 submit-reg-div">
             <button type="submit" className="reg-submit" onClick={this.register}>Create Account</button>
                <Link to ="/login"><p>Have an account already? Sign in </p></Link>
            </div>
          </form>
      </div>
    );
  }
}
export default RegistrationPage;

// function RegistrationPage(props) {
  
//   return(
//       <div className="login-card">
//           <div className="reg-header text-center"> <Link to ="/"><img src={Back_Button} className="back-button mobile-logo float-left" alt="logo" /></Link>Register</div>
//           <div className="mobile-logo-div"><img src={Waste_Logo} className="logo mobile-logo" alt="logo" /></div>
//           <form className="form-control reg-form">
//           <div className="row">
//               <div className="col-md-6">
//                  <div className="form-group text-left">
//                     <input type="text" 
//                         className="form-control-login" 
//                         id="firstName" 
//                         placeholder="First Name"
//                         value={this.state.credentials.firstname}
//                         onChange={this.inputChanged}
//                     />
//                   </div>

//                   <div className="form-group text-left">
//                     <input type="text" 
//                         className="form-control-login" 
//                         id="lastName" 
//                         placeholder="Last Name"
//                         value={this.state.credentials.lastname}
//                         onChange={this.inputChanged}
//                     />
//                   </div>

//                   <div className="form-group text-left">
//                     <input type="phone" 
//                         className="form-control-login" 
//                         id="phone" 
//                         placeholder="Phone Number"
//                         value={this.state.credentials.phonenumber}
//                         onChange={this.inputChanged}
//                     />
//                   </div>

//                   <div className="form-group text-left">
//                     <input type="email" 
//                         className="form-control-login" 
//                         id="email" 
//                         placeholder="Email"
//                         value={this.state.credentials.email}
//                         onChange={this.inputChanged}
//                     />
//                   </div>

//                   <div className="form-group text-left">
//                     <input type="password" 
//                         className="form-control-login" 
//                         id="password" 
//                         placeholder="Password"
//                         value={this.state.credentials.password}
//                         onChange={this.inputChanged}
//                     />
//                   </div>
//               </div>

//               <div className="col-md-6 next-mobile">
//                   <div className="form-group text-left">
//                     <input type="password" 
//                         className="form-control-login" 
//                         id="confirmPassword" 
//                         placeholder="Confirm Password"
//                         value={this.state.credentials.confirmpassword}
//                         onChange={this.inputChanged}
//                     />
//                   </div>

//                   <div className="form-group text-left">
//                     <input type="text" 
//                         className="form-control-login" 
//                         id="address" 
//                         placeholder="Street Address"
//                         value={this.state.credentials.address}
//                         onChange={this.inputChanged}
//                     />
//                   </div>

//                   <div className="form-group text-left">
//                     <input type="text" 
//                         className="form-control-login" 
//                         id="lga" 
//                         placeholder="L.G.A"
//                         value={this.state.credentials.lga}
//                         onChange={this.inputChanged}
//                     />
//                   </div>

//                   <div className="form-group text-left">
//                     <input type="text" 
//                         className="form-control-login" 
//                         id="sstate" 
//                         placeholder="State"
//                         value={this.state.credentials.state}
//                         onChange={this.inputChanged}
//                     />
//                   </div>

//                   <div className="form-group text-left">
//                     <input type="text" 
//                         className="form-control-login" 
//                         id="country" 
//                         placeholder="Country"
//                         value={this.state.credentials.country}
//                         onChange={this.inputChanged}
//                     />
//                   </div>
//               </div>
              
//             </div>
//             <div className="col-md-12 submit-reg-div">
//              <button type="submit" className="reg-submit" onClick={this.register}>Create Account</button>
//                 <Link to ="/login"><p>Have an account already? Sign in </p></Link>
//             </div>
//           </form>
//       </div>
//     )
// }
// export default RegistrationPage;

