import React from 'react';

import './footer.css';
import Twitter from '../../images/twitter.svg'
import Ph from '../../images/ph.svg'
import Github from '../../images/github.svg'
import Reddit from '../../images/reddit.svg'
import Bitcointalk from '../../images/bitcointalk.svg'
import BlockStack from '../../images/blockstack.svg'


const Footer = () => (
    <div className="row d-none d-sm-flex footer">
        <div className="col-sm-6 col-md-4 mb-3 footer__about">
            <h2>About</h2>
            <ul>
                <li>Introducing</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="col-sm-6 mb-3 col-md-4 footer__contact">
            <h2>Contact</h2>
            <p>hello@wastecoinwallet.com</p>
            <ul>
                <li><a href="http://twitter.com" > <img src={Ph} alt="ph_img" /></a></li>
                <li><a href="http://github.com" > <img src={Github} alt="github_img" /></a></li>
                <li><a href="http://reddit.com" > <img src={Reddit} alt="reddit_img" /></a></li>
                <li><a href="http://twitter.com" > <img src={Bitcointalk} alt="bitcoin_talk_img" /></a></li>
                <li><a href="http://twitter.com" > <img src={BlockStack} alt="block_stack_img" /></a></li>
                <li><a href="http://twitter.com" > <img src={Twitter} alt="twitter_img" /></a></li>
            </ul>
        </div>

        <div className="col footer__news_letter">
            <h2>Newsetter</h2>
            <p>Please enter your e-mail if want to receive updates.</p>
            <div className="input-group mb-3">
                <input type="text" className="form-control"  />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
            </div>

            <div className="landing_page__copyright">
                <p>Copyright @ SDG Innovation Team-105</p>
            </div>
        </div>
    </div>
);

export default Footer;
