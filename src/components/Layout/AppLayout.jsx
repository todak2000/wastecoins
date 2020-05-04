import React from 'react';
import UserHeader from '../UserHeader/index';
import UserSidebar from '../UserSidebar/index';

import './layout.css';
import Footer from '../Footer';

const AppLayout = (props) => {
    return (
        <div className="container">
            <UserHeader />
            <UserSidebar/>
            <div className="main">
            {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout;
