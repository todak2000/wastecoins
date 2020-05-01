import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import App from './views/Landing/index'
import AuthLayout from './components/Layout/Auth'
import SignIn from './views/SignIn'

const routing = () => (
  <Router>
      <div>
        <AuthLayout>
        <Route exact path="/" component={App} />
        <Route path="/login" component={SignIn} />
        </AuthLayout>
      </div>
  </Router>
)

export default routing;
