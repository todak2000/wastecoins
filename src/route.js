import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './views/Landing/index';
import AuthLayout from './components/Layout/Auth';
import AppLayout from './components/Layout/AppLayout';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import VerificationPage from './views/Verification';
import ResetpasswordPage from './views/ResetPassword';
import Dashboard from './views/Dashboard';
import './index.css'

const routing = () => (
  <Router>
        <AuthLayout>
        <main>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/login" component={SignIn} />
                <Route path="/registration" component={SignUp} />
                <Route path="/verification" component={VerificationPage} />
                <Route path="/resetpassword" component={ResetpasswordPage} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </main>
        </AuthLayout>
        <AppLayout>
          <main>
              <Switch>
                  <Route path="/dashboard" component={Dashboard} />
              </Switch>
          </main>
        </AppLayout>
  </Router>
)

export default routing;
