import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Header_top from './components/layout/Navbar.layout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header_top/>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
