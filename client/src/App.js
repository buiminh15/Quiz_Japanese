import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/layout/Landing.layout';
import HeaderTop from './components/layout/Navbar.layout';
import Footer from './components/layout/Footer.layout';
import AdminPage from './components/admin/admin';
import UserPage from './components/user/user';
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <HeaderTop />
          {/* ----------------------------------------------- */}
          <div id="landingPage" className="landingPage">
            {/* Landing */}
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <Switch>
                      <Route exact path="/" component={Login}></Route>
                      <Route exact path="/register" component={Register}></Route>
                      <Route exact path="/admin" component={AdminPage}></Route>
                      <Route exact path="/user" component={UserPage}></Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
