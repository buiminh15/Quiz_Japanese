import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
