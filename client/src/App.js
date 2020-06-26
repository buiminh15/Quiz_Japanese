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

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <HeaderTop />
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/admin" component={AdminPage}></Route>
            <Route exact path="/user" component={UserPage}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
