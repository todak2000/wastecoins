import React from 'react';
function Footer() {
    return(
        
           
                <div className="row text-center text-xs-center text-sm-left text-md-left footer">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <ul className="list-unstyled quick-links">
                            <li><a href="" className="nav-link">About</a></li>
                            <li><a href="" className="nav-link">Terms of Service</a></li>
                            <li><a href="" className="nav-link">Privacy Policy</a></li>
                            
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <ul className="list-unstyled quick-links">
                            <li><a href="" className="nav-link bold">Contact</a></li>  
                            <li><a href="" className="nav-link">hello@wastecoinwallet.com</a></li>
                            <li><a href="" className="nav-link">FAQ</a></li>  
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <ul className="list-unstyled quick-links">
                            <li><a href="" className="nav-link bold">Newsletter</a></li>  
                            <li><a href="" className="nav-link">Please enter your email if you want to revieve updates</a></li>
                            <li><a href="" className="nav-link">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Your email"></input><button className="btn btn-primary my-2 my-sm-0">Search</button>
                                </form></a>
                            </li>
                        </ul>
                    </div>
                </div>
                
             
          
       
    )
}
export default Footer;


{/* <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </li> */}