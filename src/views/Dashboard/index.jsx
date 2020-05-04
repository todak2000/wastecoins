import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader/index';
import UserSidebar from '../../components/UserSidebar/index';
import Back_Button from '../../images/Chevron.svg';
import './dashboard.css';

function Dashboard() {
    return (
        <div className="dahsboard-body">
            <UserHeader />
            <UserSidebar/>
            <div className="main">
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;

