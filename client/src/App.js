import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/layout/Landing.layout';
import HeaderTop from './components/layout/Navbar.layout';
import Footer from './components/layout/Footer.layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderTop />
        <Switch>
          <Route exact path="/LandingPage" component={LandingPage}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
