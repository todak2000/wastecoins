import React, {useState} from 'react';
import RegistrationPage from './components/RegistrationPage';
import HomePage from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationPage />
            </Route>
          </Switch>
       </div> */}

        <main>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/registration" component={RegistrationPage} />

            </Switch>
        </main>
      
      <Footer/>
    </div>
  );
}

export default App;
