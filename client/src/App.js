import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRouter from './commonModules/PrivateRouter';
import HeaderTop from './components/layout/Navbar.layout';
import Footer from './components/layout/Footer.layout';
import AdminPage from './components/admin/admin';
import UserPage from './components/user/user';
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {/* ----------------------------------------------- */}
          <HeaderTop />
          {/* ----------------------------------------------- */}
          <div id="landingPage" className="landingPage">
            {/* Landing */}
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Switch>
                      <PrivateRouter exact path="/admin" component={AdminPage} />
                    </Switch>
                    <Switch>
                      <PrivateRouter exact path="/user" component={UserPage} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <Footer />
          {/* ----------------------------------------------- */}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
